from django.urls import path, include, re_path
from django.views.generic import TemplateView
# from accounts.views import get_patients

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    # path('auth/', include('djoser.social.urls')),
    path("", include("patient.urls")),
    path('', TemplateView.as_view(template_name='index.html'), name='frontend')
    
    # path('get_patients', get_patients),
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]