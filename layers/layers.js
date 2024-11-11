var wms_layers = [];

var format_gadm41_IDN_4_0 = new ol.format.GeoJSON();
var features_gadm41_IDN_4_0 = format_gadm41_IDN_4_0.readFeatures(json_gadm41_IDN_4_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_IDN_4_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_IDN_4_0.addFeatures(features_gadm41_IDN_4_0);
var lyr_gadm41_IDN_4_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_IDN_4_0, 
                style: style_gadm41_IDN_4_0,
                popuplayertitle: "gadm41_IDN_4",
                interactive: true,
                title: '<img src="styles/legend/gadm41_IDN_4_0.png" /> gadm41_IDN_4'
            });
var format_areasawah_1 = new ol.format.GeoJSON();
var features_areasawah_1 = format_areasawah_1.readFeatures(json_areasawah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areasawah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areasawah_1.addFeatures(features_areasawah_1);
var lyr_areasawah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areasawah_1, 
                style: style_areasawah_1,
                popuplayertitle: "areasawah",
                interactive: true,
                title: '<img src="styles/legend/areasawah_1.png" /> areasawah'
            });
var format_RWPurwosari_2 = new ol.format.GeoJSON();
var features_RWPurwosari_2 = format_RWPurwosari_2.readFeatures(json_RWPurwosari_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RWPurwosari_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RWPurwosari_2.addFeatures(features_RWPurwosari_2);
var lyr_RWPurwosari_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RWPurwosari_2, 
                style: style_RWPurwosari_2,
                popuplayertitle: "RWPurwosari",
                interactive: true,
    title: 'RWPurwosari<br />\
    <img src="styles/legend/RWPurwosari_2_0.png" /> <br />\
    <img src="styles/legend/RWPurwosari_2_1.png" /> RW2<br />\
    <img src="styles/legend/RWPurwosari_2_2.png" /> RW3<br />\
    <img src="styles/legend/RWPurwosari_2_3.png" /> RW4<br />\
    <img src="styles/legend/RWPurwosari_2_4.png" /> RW5<br />\
    <img src="styles/legend/RWPurwosari_2_5.png" /> Rw6<br />'
        });
var format_Clipped_3 = new ol.format.GeoJSON();
var features_Clipped_3 = format_Clipped_3.readFeatures(json_Clipped_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_3.addFeatures(features_Clipped_3);
var lyr_Clipped_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_3, 
                style: style_Clipped_3,
                popuplayertitle: "Clipped",
                interactive: true,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_3_0.png" /> yes<br />\
    <img src="styles/legend/Clipped_3_1.png" /> <br />'
        });
var format_Perkebunan_4 = new ol.format.GeoJSON();
var features_Perkebunan_4 = format_Perkebunan_4.readFeatures(json_Perkebunan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perkebunan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perkebunan_4.addFeatures(features_Perkebunan_4);
var lyr_Perkebunan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perkebunan_4, 
                style: style_Perkebunan_4,
                popuplayertitle: "Perkebunan",
                interactive: true,
                title: '<img src="styles/legend/Perkebunan_4.png" /> Perkebunan'
            });
var format_Clipped_5 = new ol.format.GeoJSON();
var features_Clipped_5 = format_Clipped_5.readFeatures(json_Clipped_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_5.addFeatures(features_Clipped_5);
var lyr_Clipped_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_5, 
                style: style_Clipped_5,
                popuplayertitle: "Clipped",
                interactive: true,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_5_0.png" /> <br />'
        });
var format_Purwosari_point_6 = new ol.format.GeoJSON();
var features_Purwosari_point_6 = format_Purwosari_point_6.readFeatures(json_Purwosari_point_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Purwosari_point_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Purwosari_point_6.addFeatures(features_Purwosari_point_6);
var lyr_Purwosari_point_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Purwosari_point_6, 
                style: style_Purwosari_point_6,
                popuplayertitle: "Purwosari_point",
                interactive: true,
                title: '<img src="styles/legend/Purwosari_point_6.png" /> Purwosari_point'
            });
var format_Lapangan_7 = new ol.format.GeoJSON();
var features_Lapangan_7 = format_Lapangan_7.readFeatures(json_Lapangan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_7.addFeatures(features_Lapangan_7);
var lyr_Lapangan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_7, 
                style: style_Lapangan_7,
                popuplayertitle: "Lapangan",
                interactive: true,
                title: '<img src="styles/legend/Lapangan_7.png" /> Lapangan'
            });
var format_JalanDesa_8 = new ol.format.GeoJSON();
var features_JalanDesa_8 = format_JalanDesa_8.readFeatures(json_JalanDesa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_8.addFeatures(features_JalanDesa_8);
var lyr_JalanDesa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_8, 
                style: style_JalanDesa_8,
                popuplayertitle: "JalanDesa",
                interactive: true,
    title: 'JalanDesa<br />\
    <img src="styles/legend/JalanDesa_8_0.png" /> jln Kalpataru  VI<br />\
    <img src="styles/legend/JalanDesa_8_1.png" /> jln Kalpataru V<br />\
    <img src="styles/legend/JalanDesa_8_2.png" /> jln Kalpataru VII<br />\
    <img src="styles/legend/JalanDesa_8_3.png" /> jln Kalpataru X<br />\
    <img src="styles/legend/JalanDesa_8_4.png" /> jln Kalpataru XI<br />\
    <img src="styles/legend/JalanDesa_8_5.png" /> jln Kalpataru XII<br />\
    <img src="styles/legend/JalanDesa_8_6.png" /> <br />'
        });
var format_RT_9 = new ol.format.GeoJSON();
var features_RT_9 = format_RT_9.readFeatures(json_RT_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT_9.addFeatures(features_RT_9);
var lyr_RT_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT_9, 
                style: style_RT_9,
                popuplayertitle: "RT",
                interactive: true,
                title: '<img src="styles/legend/RT_9.png" /> RT'
            });
var format_jalansetapak_10 = new ol.format.GeoJSON();
var features_jalansetapak_10 = format_jalansetapak_10.readFeatures(json_jalansetapak_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalansetapak_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalansetapak_10.addFeatures(features_jalansetapak_10);
var lyr_jalansetapak_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalansetapak_10, 
                style: style_jalansetapak_10,
                popuplayertitle: "jalan setapak",
                interactive: true,
                title: '<img src="styles/legend/jalansetapak_10.png" /> jalan setapak'
            });
var format_Purwosari_line_11 = new ol.format.GeoJSON();
var features_Purwosari_line_11 = format_Purwosari_line_11.readFeatures(json_Purwosari_line_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Purwosari_line_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Purwosari_line_11.addFeatures(features_Purwosari_line_11);
var lyr_Purwosari_line_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Purwosari_line_11, 
                style: style_Purwosari_line_11,
                popuplayertitle: "Purwosari_line",
                interactive: true,
    title: 'Purwosari_line<br />\
    <img src="styles/legend/Purwosari_line_11_0.png" /> <br />'
        });
var format_Clipped_12 = new ol.format.GeoJSON();
var features_Clipped_12 = format_Clipped_12.readFeatures(json_Clipped_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_12.addFeatures(features_Clipped_12);
var lyr_Clipped_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_12, 
                style: style_Clipped_12,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_12.png" /> Clipped'
            });
var format_Clipped_13 = new ol.format.GeoJSON();
var features_Clipped_13 = format_Clipped_13.readFeatures(json_Clipped_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_13.addFeatures(features_Clipped_13);
var lyr_Clipped_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_13, 
                style: style_Clipped_13,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_13.png" /> Clipped'
            });
var format_Point_14 = new ol.format.GeoJSON();
var features_Point_14 = format_Point_14.readFeatures(json_Point_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Point_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_14.addFeatures(features_Point_14);
var lyr_Point_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Point_14, 
                style: style_Point_14,
                popuplayertitle: "Point",
                interactive: true,
    title: 'Point<br />\
    <img src="styles/legend/Point_14_0.png" /> 1<br />\
    <img src="styles/legend/Point_14_1.png" /> 2<br />\
    <img src="styles/legend/Point_14_2.png" /> 3<br />\
    <img src="styles/legend/Point_14_3.png" /> 4<br />\
    <img src="styles/legend/Point_14_4.png" /> 10<br />\
    <img src="styles/legend/Point_14_5.png" /> 11<br />\
    <img src="styles/legend/Point_14_6.png" /> 44<br />\
    <img src="styles/legend/Point_14_7.png" /> 88<br />\
    <img src="styles/legend/Point_14_8.png" /> <br />'
        });
var format_Clipped_15 = new ol.format.GeoJSON();
var features_Clipped_15 = format_Clipped_15.readFeatures(json_Clipped_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_15.addFeatures(features_Clipped_15);
var lyr_Clipped_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_15, 
                style: style_Clipped_15,
                popuplayertitle: "Clipped",
                interactive: true,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_15_0.png" /> footway<br />\
    <img src="styles/legend/Clipped_15_1.png" /> living_street<br />\
    <img src="styles/legend/Clipped_15_2.png" /> residential<br />\
    <img src="styles/legend/Clipped_15_3.png" /> service<br />\
    <img src="styles/legend/Clipped_15_4.png" /> tertiary<br />\
    <img src="styles/legend/Clipped_15_5.png" /> track<br />\
    <img src="styles/legend/Clipped_15_6.png" /> <br />'
        });

lyr_gadm41_IDN_4_0.setVisible(true);lyr_areasawah_1.setVisible(true);lyr_RWPurwosari_2.setVisible(true);lyr_Clipped_3.setVisible(true);lyr_Perkebunan_4.setVisible(true);lyr_Clipped_5.setVisible(true);lyr_Purwosari_point_6.setVisible(true);lyr_Lapangan_7.setVisible(true);lyr_JalanDesa_8.setVisible(true);lyr_RT_9.setVisible(true);lyr_jalansetapak_10.setVisible(true);lyr_Purwosari_line_11.setVisible(true);lyr_Clipped_12.setVisible(true);lyr_Clipped_13.setVisible(true);lyr_Point_14.setVisible(true);lyr_Clipped_15.setVisible(true);
var layersList = [lyr_gadm41_IDN_4_0,lyr_areasawah_1,lyr_RWPurwosari_2,lyr_Clipped_3,lyr_Perkebunan_4,lyr_Clipped_5,lyr_Purwosari_point_6,lyr_Lapangan_7,lyr_JalanDesa_8,lyr_RT_9,lyr_jalansetapak_10,lyr_Purwosari_line_11,lyr_Clipped_12,lyr_Clipped_13,lyr_Point_14,lyr_Clipped_15];
lyr_gadm41_IDN_4_0.set('fieldAliases', {'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_areasawah_1.set('fieldAliases', {'id': 'id', 'sawah': 'sawah', });
lyr_RWPurwosari_2.set('fieldAliases', {'id': 'id', 'RW': 'RW', });
lyr_Clipped_3.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'place': 'place', 'communicat': 'communicat', 'railway': 'railway', 'network': 'network', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'tower': 'tower', 'amenity': 'amenity', 'name': 'name', 'communic_1': 'communic_1', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'denominati': 'denominati', 'historic': 'historic', 'population': 'population', 'aeroway': 'aeroway', 'status': 'status', 'leisure': 'leisure', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'water': 'water', 'admin_leve': 'admin_leve', 'highway': 'highway', 'addr_postc': 'addr_postc', 'pump': 'pump', 'surface': 'surface', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', 'is_in': 'is_in', 'boundary': 'boundary', });
lyr_Perkebunan_4.set('fieldAliases', {'id': 'id', 'Lahan': 'Lahan', });
lyr_Clipped_5.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_Purwosari_point_6.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'place': 'place', 'communicat': 'communicat', 'railway': 'railway', 'network': 'network', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'tower': 'tower', 'amenity': 'amenity', 'name': 'name', 'communic_1': 'communic_1', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'denominati': 'denominati', 'historic': 'historic', 'population': 'population', 'aeroway': 'aeroway', 'status': 'status', 'leisure': 'leisure', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'water': 'water', 'admin_leve': 'admin_leve', 'highway': 'highway', 'addr_postc': 'addr_postc', 'pump': 'pump', 'surface': 'surface', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', 'is_in': 'is_in', 'boundary': 'boundary', });
lyr_Lapangan_7.set('fieldAliases', {'id': 'id', 'Lapangan': 'Lapangan', });
lyr_JalanDesa_8.set('fieldAliases', {'id': 'id', 'Jalan': 'Jalan', });
lyr_RT_9.set('fieldAliases', {'id': 'id', 'RT': 'RT', });
lyr_jalansetapak_10.set('fieldAliases', {'id': 'id', 'Jalan': 'Jalan', });
lyr_Purwosari_line_11.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_Clipped_12.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'smoothness': 'smoothness', 'railway': 'railway', 'layer': 'layer', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'amenity': 'amenity', 'aeroway': 'aeroway', 'oneway': 'oneway', 'name': 'name', 'public_tra': 'public_tra', 'highway': 'highway', 'surface': 'surface', 'width': 'width', 'parking': 'parking', 'tunnel': 'tunnel', 'bridge': 'bridge', });
lyr_Clipped_13.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'width': 'width', 'landuse': 'landuse', 'covered': 'covered', 'depth': 'depth', 'diameter': 'diameter', 'layer': 'layer', 'pump': 'pump', 'building': 'building', 'blockage': 'blockage', 'amenity': 'amenity', 'man_made': 'man_made', 'name': 'name', 'water': 'water', 'natural': 'natural', 'waterway': 'waterway', 'tunnel': 'tunnel', });
lyr_Point_14.set('fieldAliases', {'id': 'id', 'Keterangan': 'Keterangan', });
lyr_Clipped_15.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'smoothness': 'smoothness', 'railway': 'railway', 'layer': 'layer', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'amenity': 'amenity', 'aeroway': 'aeroway', 'oneway': 'oneway', 'name': 'name', 'public_tra': 'public_tra', 'highway': 'highway', 'surface': 'surface', 'width': 'width', 'parking': 'parking', 'tunnel': 'tunnel', 'bridge': 'bridge', });
lyr_gadm41_IDN_4_0.set('fieldImages', {'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_areasawah_1.set('fieldImages', {'id': 'TextEdit', 'sawah': 'TextEdit', });
lyr_RWPurwosari_2.set('fieldImages', {'id': 'TextEdit', 'RW': 'TextEdit', });
lyr_Clipped_3.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'health_fac': 'TextEdit', 'depth': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'communicat': 'TextEdit', 'railway': 'TextEdit', 'network': 'TextEdit', 'operator_t': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'rooms': 'TextEdit', 'tourism': 'TextEdit', 'tower': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'communic_1': 'TextEdit', 'staff_coun': 'TextEdit', 'public_tra': 'TextEdit', 'width': 'TextEdit', 'access': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'beds': 'TextEdit', 'covered': 'TextEdit', 'landuse': 'TextEdit', 'staff_co_1': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'healthcare': 'TextEdit', 'opening_ho': 'TextEdit', 'government': 'TextEdit', 'isced_leve': 'TextEdit', 'denominati': 'TextEdit', 'historic': 'TextEdit', 'population': 'TextEdit', 'aeroway': 'TextEdit', 'status': 'TextEdit', 'leisure': 'TextEdit', 'toilets_di': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'health_f_1': 'TextEdit', 'water': 'TextEdit', 'admin_leve': 'TextEdit', 'highway': 'TextEdit', 'addr_postc': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'toilets_ha': 'TextEdit', 'health_f_2': 'TextEdit', 'layer': 'TextEdit', 'military': 'TextEdit', 'shop': 'TextEdit', 'medical_sy': 'TextEdit', 'addr_house': 'TextEdit', 'religion': 'TextEdit', 'is_in': 'TextEdit', 'boundary': 'TextEdit', });
lyr_Perkebunan_4.set('fieldImages', {'id': 'TextEdit', 'Lahan': 'TextEdit', });
lyr_Clipped_5.set('fieldImages', {'fid': '', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_Purwosari_point_6.set('fieldImages', {'osm_id': '', 'osm_type': '', 'health_fac': '', 'depth': '', 'office': '', 'place': '', 'communicat': '', 'railway': '', 'network': '', 'operator_t': '', 'blockage': '', 'roof_mater': '', 'rooms': '', 'tourism': '', 'tower': '', 'amenity': '', 'name': '', 'communic_1': '', 'staff_coun': '', 'public_tra': '', 'width': '', 'access': '', 'bridge': '', 'smoothness': '', 'beds': '', 'covered': '', 'landuse': '', 'staff_co_1': '', 'diameter': '', 'access_roo': '', 'building_m': '', 'healthcare': '', 'opening_ho': '', 'government': '', 'isced_leve': '', 'denominati': '', 'historic': '', 'population': '', 'aeroway': '', 'status': '', 'leisure': '', 'toilets_di': '', 'waterway': '', 'parking': '', 'tunnel': '', 'building': '', 'operator': '', 'barrier': '', 'capacity': '', 'man_made': '', 'health_f_1': '', 'water': '', 'admin_leve': '', 'highway': '', 'addr_postc': '', 'pump': '', 'surface': '', 'natural': '', 'oneway': '', 'addr_stree': '', 'toilets_ha': '', 'health_f_2': '', 'layer': '', 'military': '', 'shop': '', 'medical_sy': '', 'addr_house': '', 'religion': '', 'is_in': '', 'boundary': '', });
lyr_Lapangan_7.set('fieldImages', {'id': 'TextEdit', 'Lapangan': 'TextEdit', });
lyr_JalanDesa_8.set('fieldImages', {'id': 'TextEdit', 'Jalan': 'TextEdit', });
lyr_RT_9.set('fieldImages', {'id': 'TextEdit', 'RT': 'TextEdit', });
lyr_jalansetapak_10.set('fieldImages', {'id': 'TextEdit', 'Jalan': 'TextEdit', });
lyr_Purwosari_line_11.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_Clipped_12.set('fieldImages', {'fid': '', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'layer': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'amenity': 'TextEdit', 'aeroway': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'public_tra': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'width': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'bridge': 'TextEdit', });
lyr_Clipped_13.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'width': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'depth': 'TextEdit', 'diameter': 'TextEdit', 'layer': 'TextEdit', 'pump': 'TextEdit', 'building': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'man_made': 'TextEdit', 'name': 'TextEdit', 'water': 'TextEdit', 'natural': 'TextEdit', 'waterway': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_Point_14.set('fieldImages', {'id': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_Clipped_15.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'layer': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'amenity': 'TextEdit', 'aeroway': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'public_tra': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'width': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'bridge': 'TextEdit', });
lyr_gadm41_IDN_4_0.set('fieldLabels', {'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_areasawah_1.set('fieldLabels', {'id': 'no label', 'sawah': 'no label', });
lyr_RWPurwosari_2.set('fieldLabels', {'id': 'no label', 'RW': 'no label', });
lyr_Clipped_3.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'hidden field', 'office': 'no label', 'place': 'no label', 'communicat': 'no label', 'railway': 'no label', 'network': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'tower': 'no label', 'amenity': 'no label', 'name': 'no label', 'communic_1': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'denominati': 'no label', 'historic': 'no label', 'population': 'no label', 'aeroway': 'no label', 'status': 'no label', 'leisure': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'water': 'no label', 'admin_leve': 'no label', 'highway': 'no label', 'addr_postc': 'no label', 'pump': 'no label', 'surface': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'religion': 'no label', 'is_in': 'no label', 'boundary': 'no label', });
lyr_Perkebunan_4.set('fieldLabels', {'id': 'no label', 'Lahan': 'no label', });
lyr_Clipped_5.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_Purwosari_point_6.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'place': 'no label', 'communicat': 'no label', 'railway': 'no label', 'network': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'tower': 'no label', 'amenity': 'no label', 'name': 'no label', 'communic_1': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'denominati': 'no label', 'historic': 'no label', 'population': 'no label', 'aeroway': 'no label', 'status': 'no label', 'leisure': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'water': 'no label', 'admin_leve': 'no label', 'highway': 'no label', 'addr_postc': 'no label', 'pump': 'no label', 'surface': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'religion': 'no label', 'is_in': 'no label', 'boundary': 'no label', });
lyr_Lapangan_7.set('fieldLabels', {'id': 'no label', 'Lapangan': 'no label', });
lyr_JalanDesa_8.set('fieldLabels', {'id': 'no label', 'Jalan': 'no label', });
lyr_RT_9.set('fieldLabels', {'id': 'no label', 'RT': 'no label', });
lyr_jalansetapak_10.set('fieldLabels', {'id': 'no label', 'Jalan': 'no label', });
lyr_Purwosari_line_11.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_Clipped_12.set('fieldLabels', {'fid': 'no label', 'osm_id': 'header label - visible with data', 'osm_type': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'layer': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'amenity': 'no label', 'aeroway': 'no label', 'oneway': 'no label', 'name': 'no label', 'public_tra': 'no label', 'highway': 'no label', 'surface': 'no label', 'width': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'bridge': 'no label', });
lyr_Clipped_13.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'width': 'no label', 'landuse': 'no label', 'covered': 'no label', 'depth': 'no label', 'diameter': 'no label', 'layer': 'no label', 'pump': 'no label', 'building': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'man_made': 'no label', 'name': 'no label', 'water': 'no label', 'natural': 'no label', 'waterway': 'no label', 'tunnel': 'no label', });
lyr_Point_14.set('fieldLabels', {'id': 'no label', 'Keterangan': 'no label', });
lyr_Clipped_15.set('fieldLabels', {'osm_id': 'header label - visible with data', 'osm_type': 'header label - visible with data', 'smoothness': 'hidden field', 'railway': 'hidden field', 'layer': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'amenity': 'header label - always visible', 'aeroway': 'no label', 'oneway': 'no label', 'name': 'no label', 'public_tra': 'no label', 'highway': 'no label', 'surface': 'no label', 'width': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'bridge': 'no label', });
lyr_Clipped_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});