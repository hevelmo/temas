var domEl, tempsNames, urlsApi;
domEl = {
	"a_go_schedule_test_drive_ftype_conv":"a#go-schedule-test-drive-ftype-conv",
	"a_go_schedule_test_drive_ftype_coupe":"a#go-schedule-test-drive-ftype-coupe",
	"a_go_schedule_test_drive_xf":"a#go-schedule-test-drive-xf",
	"a_go_schedule_test_drive_xj":"a#go-schedule-test-drive-xj",
	"btn_service_send_country":"#service_send_country",
	"btn_service_send_gdl":"#service_send_gdl",
	"div_content_details_models":"div#content_details_models",
	"div_content_dual_frame_carousel":"div#content_dual_frame_carousel",
	"div_content_form_country":"div#content_form_country",
	"div_content_form_gdl":"div#content_form_gdl",
	"div_content_form_schedule_test_drive":"div#content_form_schedule_test_drive",
	"div_content_model_selector":"div#content_model_selector",
	"div_content_news":"div#content_promos",
	"div_content_select_models":"div#content_select_models",
	"div_hidden_inputs_session":"div#hidden-inputs-session",
	"div_hidden_inputs_temporal":"div#hidden-inputs-temporal",
	"div_recurrent":"div#content-temporal-interactive",
	"div_recurrent_agencie_address":"#content-agencie-address",
	"form_jag_service_country":"#form-jag-service-country",
	"form_jag_service_gdl":"#form-jag-service-gdl",
	"input_master_host":"input#master-host",
	"itm_ser_country_concessionary":"#concessionary-service-country",
	"itm_ser_country_email":"#email-service-country",
	"itm_ser_country_lastname":"#lastname-service-country",
	"itm_ser_country_logo":"#logo-service-country",
	"itm_ser_country_message":"#message-service-country",
	"itm_ser_country_name":"#name-service-country",
	"itm_ser_country_phone":"#phone-service-country",
	"itm_ser_country_url":"#url-service-country",
	"itm_ser_gdl_concessionary":"#concessionary-service-gdl",
	"itm_ser_gdl_email":"#email-service-gdl",
	"itm_ser_gdl_lastname":"#lastname-service-gdl",
	"itm_ser_gdl_logo":"#logo-service-gdl",
	"itm_ser_gdl_message":"#message-service-gdl",
	"itm_ser_gdl_name":"#name-service-gdl",
	"itm_ser_gdl_phone":"#phone-service-gdl",
	"itm_ser_gdl_url":"#url-service-gdl",
	"validate_required":".validate-required"
};
tempsNames = {
	"recurrent_agencies":"temp_content_agencies",
	"temp_agencie_jaguar_country":"temp_agencie_jaguar_country",
	"temp_agencie_jaguar_gdl":"temp_agencie_jaguar_gdl",
	"temp_aviso_privacidad":"temp_aviso_privacidad",
	"temp_conquista_los_caminos":"temp_conquista_los_caminos",
	"temp_details_f_type":"temp_details_f_type",
	"temp_details_f_type_conv":"temp_details_f_type_conv",
	"temp_details_f_type_coupe":"temp_details_f_type_coupe",
	"temp_details_xf":"temp_details_xf",
	"temp_details_xj":"temp_details_xj",
	"temp_dual_frame_carousel_ftype_conv":"temp_dual_frame_carousel_ftype_conv",
	"temp_dual_frame_carousel_ftype_coupe":"temp_dual_frame_carousel_ftype_coupe",
	"temp_dual_frame_carousel_ftype_xf":"temp_dual_frame_carousel_ftype_xf",
	"temp_dual_frame_carousel_ftype_xj":"temp_dual_frame_carousel_ftype_xj",
	"temp_form_country_contact":"temp_formcountry_contact",
	"temp_form_country_service":"temp_formcountry_service",
	"temp_form_gdl_contact":"temp_formgdl_contact",
	"temp_form_gdl_service":"temp_formgdl_service",
	"temp_form_schedule_test_drive":"temp_form_schedule_test_drive",
	"temp_form_schedule_test_drive_by_model":"temp_form_schedule_test_drive_by_model",
	"temp_lujo_de_un_jaguar":"temp_lujo_de_un_jaguar",
	"temp_masters_of_innovation":"temp_masters_of_innovation",
	"temp_model_promos_dual":"temp_model_promos_dual",
	"temp_model_promos_maestros_de_la_innovacion":"temp_model_promos_maestros_de_la_innovacion",
	"temp_model_promos_xf":"temp_model_promos_xf",
	"temp_model_promos_xj":"temp_model_promos_xj",
	"temp_model_selector_ftype_conv":"temp_model_selector_ftype_conv",
	"temp_model_selector_ftype_coupe":"temp_model_selector_ftype_coupe",
	"temp_model_selector_ftype_xf":"temp_model_selector_ftype_xf",
	"temp_model_selector_ftype_xj":"temp_model_selector_ftype_xj",
	"temp_news":"temp_promos",
	"temp_select_f_type":"temp_select_f_type",
	"temp_site_news_best_gift":"temp_site_news_best_gift",
	"temp_site_news_night_experiencet":"temp_night_experience",
	"temp_site_news_sibarita":"temp_site_news_sibarita",
	"temp_site_news_sibarita_masters":"temp_site_news_sibarita_masters",
	"temp_slider_index":"temp_sliderindex",
	"temp_slider_inner_contact":"temp_sliderinner_contact",
	"temp_slider_inner_ftype":"temp_sliderinner_ftype",
	"temp_slider_inner_ftype_conv":"temp_sliderinner_ftype_conv",
	"temp_slider_inner_ftype_coupe":"temp_sliderinner_ftype_coupe",
	"temp_slider_inner_promos":"temp_sliderinner_promos",
	"temp_slider_inner_servicio":"temp_sliderinner_service",
	"temp_slider_inner_xf":"temp_sliderinner_xf",
	"temp_slider_inner_xj":"temp_sliderinner_xj",
	"temp_sliderinner_agencie_country":"temp_sliderinner_agencie_country",
	"temp_sliderinner_agencie_gdl":"temp_sliderinner_agencie_gdl",
	"temp_sliderinner_schedule_test_drive":"temp_sliderinner_schedule_test_drive",
	"temp_there_s_a_new_chief_in_town":"temp_there_s_a_new_chief_in_town"
};
urlsApi = {
	"add_max":"api/v1/add/max",
	"snd_con":"api/v1/send/contacto",
	"snd_drv":"api/v1/send/testdrive",
	"snd_fin":"api/v1/send/financiamiento",
	"snd_srv":"api/v1/send/servicio"
};
