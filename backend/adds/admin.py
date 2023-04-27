from django.contrib.gis import admin
from adds.models import Add, Kommun
from django.contrib.gis import forms

admin.site.register(Add, admin.GISModelAdmin)
admin.site.register(Kommun, admin.GISModelAdmin)

# class YourClassAdminForm(forms.ModelForm):
#     your_attribute = forms.PointField(widget=forms.OSMWidget(attrs={
#             'display_raw': True}))
#
# class YourClassAdmin(admin.GeoModelAdmin):
#     form = YourClassAdminForm
#
#
# admin.site.register(Add, YourClassAdmin)
# admin.site.register(Kommun, YourClassAdmin)
