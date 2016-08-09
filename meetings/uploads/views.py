from uploads.serializers import UploadSerializer
from uploads.models import Upload
from rest_framework import viewsets
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator


# Create your views here.


class UploadViewSet(viewsets.ModelViewSet):
    resource_name = 'uploads'
    serializer_class = UploadSerializer
    lookup_field = 'pk'
    filter_fields = ('owner',)
    queryset = Upload.objects.all()

    @method_decorator(login_required)
    def create(self, request, *args, **kwargs):
        return super(UploadViewSet, self).create(request, args, kwargs)

    def perform_create(self, serializer):
        serializer.save(owner=serializer.context['request'].user)
