from django.urls import path
from . import views

# 正在部署的应用的名称
app_name = 'news'

urlpatterns = [
    path('news-list/', views.news_list, name='news_list'),
    path('news-detail/<slug:slug>', views.news_detail, name='news_detail'),

]
