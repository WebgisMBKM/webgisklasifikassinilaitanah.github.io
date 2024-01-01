var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIWorldTopo_1 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_DESA_2 = new ol.format.GeoJSON();
var features_DESA_2 = format_DESA_2.readFeatures(json_DESA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DESA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DESA_2.addFeatures(features_DESA_2);
var lyr_DESA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DESA_2, 
                style: style_DESA_2,
                interactive: true,
                title: '<img src="styles/legend/DESA_2.png" /> DESA'
            });
var format_KECAMATAN_3 = new ol.format.GeoJSON();
var features_KECAMATAN_3 = format_KECAMATAN_3.readFeatures(json_KECAMATAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KECAMATAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KECAMATAN_3.addFeatures(features_KECAMATAN_3);
var lyr_KECAMATAN_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KECAMATAN_3, 
                style: style_KECAMATAN_3,
                interactive: true,
                title: '<img src="styles/legend/KECAMATAN_3.png" /> KECAMATAN'
            });
var format_KABUPATEN_4 = new ol.format.GeoJSON();
var features_KABUPATEN_4 = format_KABUPATEN_4.readFeatures(json_KABUPATEN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KABUPATEN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KABUPATEN_4.addFeatures(features_KABUPATEN_4);
var lyr_KABUPATEN_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KABUPATEN_4, 
                style: style_KABUPATEN_4,
                interactive: true,
                title: '<img src="styles/legend/KABUPATEN_4.png" /> KABUPATEN'
            });
var format_JALAN_5 = new ol.format.GeoJSON();
var features_JALAN_5 = format_JALAN_5.readFeatures(json_JALAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_5.addFeatures(features_JALAN_5);
var lyr_JALAN_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_5, 
                style: style_JALAN_5,
                interactive: true,
    title: 'JALAN<br />\
    <img src="styles/legend/JALAN_5_0.png" /> <br />\
    <img src="styles/legend/JALAN_5_1.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JALAN_5_2.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JALAN_5_3.png" /> Jalan Lokal<br />'
        });
var format_KOORDINAT_BANTEN_6 = new ol.format.GeoJSON();
var features_KOORDINAT_BANTEN_6 = format_KOORDINAT_BANTEN_6.readFeatures(json_KOORDINAT_BANTEN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOORDINAT_BANTEN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOORDINAT_BANTEN_6.addFeatures(features_KOORDINAT_BANTEN_6);
var lyr_KOORDINAT_BANTEN_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KOORDINAT_BANTEN_6, 
                style: style_KOORDINAT_BANTEN_6,
                interactive: true,
    title: 'KOORDINAT_BANTEN<br />\
    <img src="styles/legend/KOORDINAT_BANTEN_6_0.png" /> Nilai Kurang Dari 1000000<br />\
    <img src="styles/legend/KOORDINAT_BANTEN_6_1.png" /> Nilai 1000000-2000000<br />\
    <img src="styles/legend/KOORDINAT_BANTEN_6_2.png" /> Nilai 2000000-5000000<br />\
    <img src="styles/legend/KOORDINAT_BANTEN_6_3.png" /> Nilai 5000000-10000000<br />\
    <img src="styles/legend/KOORDINAT_BANTEN_6_4.png" /> Nilai 10000000-20000000<br />\
    <img src="styles/legend/KOORDINAT_BANTEN_6_5.png" /> Nilai Lebih Dari 20000000<br />\
    <img src="styles/legend/KOORDINAT_BANTEN_6_6.png" /> <br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_ESRIWorldTopo_1.setVisible(true);lyr_DESA_2.setVisible(true);lyr_KECAMATAN_3.setVisible(true);lyr_KABUPATEN_4.setVisible(true);lyr_JALAN_5.setVisible(true);lyr_KOORDINAT_BANTEN_6.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_ESRIWorldTopo_1,lyr_DESA_2,lyr_KECAMATAN_3,lyr_KABUPATEN_4,lyr_JALAN_5,lyr_KOORDINAT_BANTEN_6];
lyr_DESA_2.set('fieldAliases', {'WADMKD': 'WADMKD', });
lyr_KECAMATAN_3.set('fieldAliases', {'WADMKC': 'WADMKC', });
lyr_KABUPATEN_4.set('fieldAliases', {'WADMKK': 'WADMKK', });
lyr_JALAN_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KOORDINAT_BANTEN_6.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'JENIS_PROP': 'JENIS_PROP', 'LUAS_TANAH': 'LUAS_TANAH', 'LUAS_BANGU': 'LUAS_BANGU', 'NILAI_PASA': 'NILAI_PASA', 'INDIKASI_N': 'INDIKASI_N', 'KLASIFIKAS': 'KLASIFIKAS', 'KELURAHAN_': 'KELURAHAN_', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROVINSI': 'PROVINSI', });
lyr_DESA_2.set('fieldImages', {'WADMKD': 'TextEdit', });
lyr_KECAMATAN_3.set('fieldImages', {'WADMKC': 'TextEdit', });
lyr_KABUPATEN_4.set('fieldImages', {'WADMKK': 'TextEdit', });
lyr_JALAN_5.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_KOORDINAT_BANTEN_6.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'JENIS_PROP': 'TextEdit', 'LUAS_TANAH': 'TextEdit', 'LUAS_BANGU': 'TextEdit', 'NILAI_PASA': 'TextEdit', 'INDIKASI_N': 'TextEdit', 'KLASIFIKAS': 'TextEdit', 'KELURAHAN_': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROVINSI': 'TextEdit', });
lyr_DESA_2.set('fieldLabels', {'WADMKD': 'no label', });
lyr_KECAMATAN_3.set('fieldLabels', {'WADMKC': 'no label', });
lyr_KABUPATEN_4.set('fieldLabels', {'WADMKK': 'no label', });
lyr_JALAN_5.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_KOORDINAT_BANTEN_6.set('fieldLabels', {'X': 'inline label', 'Y': 'inline label', 'JENIS_PROP': 'inline label', 'LUAS_TANAH': 'inline label', 'LUAS_BANGU': 'inline label', 'NILAI_PASA': 'inline label', 'INDIKASI_N': 'inline label', 'KLASIFIKAS': 'inline label', 'KELURAHAN_': 'inline label', 'KECAMATAN': 'inline label', 'KABUPATEN': 'inline label', 'PROVINSI': 'inline label', });
lyr_KOORDINAT_BANTEN_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});