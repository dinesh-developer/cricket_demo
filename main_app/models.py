from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

# common class for all tables
class TimeStamp(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
    	abstract = True


# All teams/clubs
class Team(TimeStamp):
    name = models.CharField(max_length=100, blank=False, unique=True)
    logo = models.ImageField(upload_to='Teams/', blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'table'


# Player full detail
class Player(TimeStamp):
    first_name = models.CharField(max_length=100, blank=False)
    last_name = models.CharField(max_length=100, blank=False)
    image = models.ImageField(upload_to='Players/', blank=False)
    jersey_number = models.CharField(max_length=5, blank=False)
    total_played_matches = models.IntegerField(default=0)
    total_runs = models.IntegerField(default=0)
    total_centuries = models.IntegerField(default=0)
    total_fifties = models.IntegerField(default=0)
    total_wickets = models.IntegerField(default=0)
    best_score = models.IntegerField(default=0)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)

    def __str__(self):
        return self.first_name + ' ' + self.last_name + ' - ' +str(self.team.name)

    class Meta:
        db_table = 'player_detail'


# All matches data
class Matches(models.Model):
    status = (
        ("Tie","Tie"),
        ("Draw","Draw"),
        ("Get Result", "Get Result")
    )

    game_overs = (
        ("20","20"),
        ("50","50"),
        ("50 +", "50 +")
    )

    team_1 = models.ForeignKey(Team, on_delete=models.CASCADE, related_name="host_team")
    team_1_score = models.IntegerField(default=0)
    team_1_wicket_down = models.IntegerField(default=0)
    team_1_played_overs = models.IntegerField(default=0)
    team_2 = models.ForeignKey(Team, on_delete=models.CASCADE, related_name="guest_team")
    team_2_score = models.IntegerField(default=0)
    team_2_wicket_down = models.IntegerField(default=0)
    team_2_played_overs = models.IntegerField(default=0)
    status = models.CharField(max_length=15, choices=status, default="Get Result")
    overs = models.CharField(max_length=5, choices=game_overs, default="50")
    winning_team = models.ForeignKey(Team, null=True, on_delete=models.CASCADE, related_name="winner_team")
    match_date = models.DateField()
    won_by_runs = models.IntegerField(default=0)
    won_by_wickets = models.IntegerField(default=0)


# match wise player records
class MatchPlayerPerformance(models.Model):
	match = models.ForeignKey(Matches, on_delete=models.CASCADE)
	player = models.ForeignKey(Player, on_delete=models.CASCADE)
	runs = models.IntegerField(default=0)
	balls_played = models.IntegerField(default=0)
	wicket_taken = models.IntegerField(default=0)
	overs_thrown = models.IntegerField(default=0)


# this is team wise point tables
class PointTable(models.Model):
	team = models.ForeignKey(Team, on_delete=models.CASCADE)
	match_played = models.IntegerField(default=0)
	won = models.IntegerField(default=0)
	lose = models.IntegerField(default=0)
	draw = models.IntegerField(default=0)
	points = models.IntegerField(default=0)


# update player profile on basis of match performance
@receiver(post_save, sender=MatchPlayerPerformance)
def create_point_table(sender, instance, **kwargs):
	player = instance.player
	score = instance.runs
	player.total_played_matches += 1
	player.total_runs += score
	if score > 99:
		player.total_centuries += 1
	if score > 49 and score < 100:
		player.total_fifties += 1
	player.total_wickets += instance.wicket_taken
	if score>player.best_score:
		player.best_score = score
	player.save()

# create point table object at time of Team creation
@receiver(post_save, sender=Team)
def create_point_table(sender, instance, **kwargs):
	if not PointTable.objects.filter(team=instance).exists():
		PointTable.objects.create(team=instance)

# update point table on basis of match result
@receiver(post_save, sender=Matches)
def update_point_table(sender, instance, **kwargs):
	point_objs = PointTable.objects.all()
	point_table_obj1 = point_objs.get(team=instance.team_1)
	point_table_obj2 = point_objs.get(team=instance.team_2)
	
	winning_team = instance.winning_team

	if winning_team == point_table_obj1.team:
		point_table_obj1.won += 1
		point_table_obj1.points += 2
	elif winning_team == None:
		point_table_obj1.draw += 1
	elif winning_team == point_table_obj2.team:
		point_table_obj1.lose += 1
	point_table_obj1.match_played += 1
	point_table_obj1.save()

	if winning_team == point_table_obj2.team:
		point_table_obj2.won += 1
		point_table_obj2.points += 2
	elif winning_team == None:
		point_table_obj2.draw += 1
	elif winning_team == point_table_obj1.team:
		point_table_obj2.lose += 1
	point_table_obj2.match_played += 1
	point_table_obj2.save()