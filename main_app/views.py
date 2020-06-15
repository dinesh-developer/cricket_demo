from django.shortcuts import render
from django.views.generic import View
from main_app.models import *

# Create your views here.

class Home(View):
	def get(self,request, *args, **kwargs):
		teams = Team.objects.all()
		matches = Matches.objects.all()
		context = {'teams':teams, 'matches':matches}
		return render(request, 'dashboard.html', context)


class TeamDetail(View):
	def get(self,request, *args, **kwargs):
		players = Player.objects.filter(team__id=kwargs['object_id'])
		context = {'players':players}
		return render(request, 'team.html', context)


class PlayerView(View):
	def get(self,request, *args, **kwargs):
		player = Player.objects.get(id=kwargs['object_id'])
		context = {'player':player}
		return render(request, 'player.html', context)


class MatchListing(View):
	def get(self,request, *args, **kwargs):
		matches = Matches.objects.all()
		context = {'matches':matches}
		return render(request, 'all_match.html', context)


class MatchSummary(View):
	def get(self,request, *args, **kwargs):
		teams = Team.objects.all()
		context = {'teams':teams}
		return render(request, 'match_data.html', context)