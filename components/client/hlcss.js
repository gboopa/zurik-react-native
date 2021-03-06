import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({




/* HeavyLight Css Classes */

#mfPreviewBar {
	position: fixed !important;
	display: none !important;
}

.page-content{
	background: url('../img/map_bg.png');
	background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
}

.page-content-forget{
	background: url('../img/map_bg.png');
	background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 75%;
}

.floatLeft{
	float: left;
}

table .btn

*:focus {
    outline: none;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #E1E4EA;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #E1E4EA;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #E1E4EA;
}
:-moz-placeholder { /* Firefox 18- */
  color: #E1E4EA;
}

/* Login */ 
.error_login{
	color: #D22227;
    font-family: "FuturaBTWXX-Book", sans-serif;
    font-size: 10pt;
    line-height: 10pt;
    margin-bottom: 34px;
}

.label_login{
	color:#7E838E;
	font-family: "FuturaBTWXX-Book", sans-serif;
    font-size: 10pt;
    line-height: 10pt;
    text-align: left;
    margin-bottom: 10px;
    letter-spacing: 2px;
}

.label_forpass{
	color:#7E838E;
	font-family: "FuturaBTWXX-Book", sans-serif;
    font-size: 13pt;
    line-height: 20pt;
    text-align: left;
    margin-bottom: 10px;
    letter-spacing: 2px;
}

.forgotten-pass{
	letter-spacing: 1px;
}

.col-xs-12{
	width: 200px;
    margin: auto;
    position: relative;
}

.col-xs-8{
	width: 400px;
    margin: auto;
    position: relative;
}

.pull-right{
	position: absolute;
    right: -120px;
    top: 25px;
    font-family: "FuturaBTWXX-Book", sans-serif;
    font-size: 10pt;
    line-height: 10pt;
    width: 100px;
    text-align: left;
    
}

/*.pull-right a{
	color: #7E838E;
    text-decoration: none;
}*/

.login_desc{
	margin-top: 200px;
    font-size: 10pt;
    line-height: 15pt;
    color: #A3AAB2;
    padding: 0px 40px;
    margin-bottom: 110px;
}
/* Login Bottom */
.bottom{
	padding: 0px 13px 0px 13px;
    clear: both;
    background-color: #FFF;
    height: 33px;
    position: fixed;
    bottom: 0px;
    width: 100%;
    left: 0px;
    box-shadow: 0 0 20px rgba(31, 54, 79, 0.2);
}

/*.login .bottom{
	padding: 15px 0px 0px 0px;
	height: auto;
	position: relative;
	box-shadow: none;
}*/

.copyright{
	float: left;
    font-size: 10pt;
    padding-top: 12px;
    color: #7e838e;
    /* padding-left: 14px; */
    position: relative;
}

/*.login .copyright{
	padding-left: 14px;
    top: 25px;
}*/

.logo_bottom{
	float: right;
    margin-right: 52px;
    bottom: -9px;
    position: relative;
}

/* Main menu */
.logo_top{
	float: left;
	margin-left: 40px;
}
.zview{
	float: left;
	margin-left: 15px;
}

.label-view{
	margin-top: 5px;
    font-size: 12px;
    margin-bottom: 2px;
    color: #CFD7E5;
    letter-spacing: 2px;
}

.icon-view{
	width: 24px;
	height: 25px;
	background-image: url(../img/view_icon.svg);
	background-repeat: no-repeat;
	margin: auto;
	cursor: pointer;
}

.name_profile{
    height: 28px;
    background-color: #50535B;
    color: #7E838E;
    padding: 12px 12px 0px 12px;
    font-size: 14px;
    max-width: 150px;
    letter-spacing: 1.5px;
}

.alerts_profile{
	background: #232323;
    height: 20px;
    position: relative;
}

.num_alerts{
    float: left;
    background-color: #DA2128;
    color: #FFF;
    font-weight: bold;
    height: 20px;
    line-height: 20px;
    width: 35px;
    text-align: right;
    padding-right: 5px;
}

.label_alerts{
	float: left;
    color: #50535B;
     padding-left: 5px;
    line-height: 20px;
    cursor:pointer;
}

.label_alerts:hover, .open_menu .label_alerts{
	color: #FFF;
}

.label_alert_text{
	letter-spacing: 1.5px;
}

.arrow_alerts{
	margin: 3px 4px;
}

.hamburger-menu{
	display: none;
}

.close-menu, .close-menu2{
	display: none;
}

.zkuserdetails, .zksettings{
	display: none;
}

/* Dash board*/
.map-container{
	/*height: 610px;*/
    background-color: #232323;
    text-align: center;
    padding: 30px;
    /*padding-bottom: 0px;*/
    position: relative;
    width:-webkit-calc(100% - 60px);
	width:-moz-calc(100% - 60px);
	width:calc(100% - 60px);
}

.st0, .st1, .st2, .st3{
	fill:#333333;
}

#circles circle{
	mix-blend-mode: screen;
}

#circles g{
	display: none;
}

#circles g.selected{
	display: block;
}

.selection-map{
	position: absolute;
	bottom: 0px;
	text-align: left;
	padding-left: 30px;
}

.selection-map ul{
	list-style: none;
    padding: 0px;
}

.selection-map ul li{
	line-height: 15px;
    height: 20px;
    font-size: 14px;
    cursor: pointer;
}

.selection-map ul li.selected{
	color: #FFF;
}

.selection-map ul li.selected:before{
  content: " ";
  background-image: url(../img/select_map.png);
  background-repeat: no-repeat;
  line-height: 16px;
  height: 16px;
  width: 21px;
  position: absolute;
  left: 0;
}

.labels_map{
	width: 340px;
	position: absolute;
	text-align: center;
	bottom: 18px;
	left:-webkit-calc(50% - 170px);
	left:-moz-calc(50% - 170px);
	left:calc(50% - 170px);
}

.labels_map .upcoming{
	float: left;
	line-height: 13px;
}
.labels_map .upcoming div{
	width: 11px;
	height: 11px;
	background-color: #D42C31;
	border: 1px solid #000;
	float: left;
	margin-right: 5px;
	-webkit-border-radius: 11px;
	-moz-border-radius: 11px;
	border-radius: 11px; 
}
.labels_map .ongoing{
	float: left;
    position: absolute;
    left:-webkit-calc(50% - 43px);
	left:-moz-calc(50% - 43px);
	left:calc(50% - 43px);
    line-height: 13px;
}
.labels_map .ongoing div{
	width: 11px;
	height: 11px;
	background-color: #FF7A0C;
	border: 1px solid #000;
	float: left;
	margin-right: 5px;
	-webkit-border-radius: 11px;
	-moz-border-radius: 11px;
	border-radius: 11px; 
}
.labels_map .completed{
	float: right;
	line-height: 13px;
}
.labels_map .completed div{
	width: 11px;
	height: 11px;
	background-color: #8BD30C;
	border: 1px solid #000;
	float: left;
	margin-right: 5px;
	-webkit-border-radius: 11px;
	-moz-border-radius: 11px;
	border-radius: 11px; 
}

.rt-db{
	background-color: #333333;
	width:-webkit-calc(50% - 5px);
	width:-moz-calc(50% - 5px);
	width:calc(50% - 5px);
	float: left;
	position: relative;
	margin-top: 10px;
}

.rt-table-container{
	width:-webkit-calc(100% - 76px);
	width:-moz-calc(100% - 76px);
	width:calc(100% - 76px);
	padding-left: 38px;''
	position: relative;
}

.table .last-button-table{
	width: 1% !important;
}

.rt-table-container .last-button-table{
	width: 92px;
}

.bg-header-rt{
	position: absolute;
	width: 100%;
	height: 40px;
	background-color: #191919;
	left: 0px;
}

.panel-title{
	height: 50px;
	background-color: #232323;
	line-height: 50px;
	color: #FFF;
	font-size: 14px;
	width: 100%;
}

.panel-title img, .panel-title div{
	float: left;
	letter-spacing: 2px;
}

.panel-title div span{
	color: #7E838E;
	font-size: 14px;
}

.panel-title img, .panel-title .open.tracker{
	top: 15px;
    position: relative;
    margin-left: 13px;
    margin-right: 8px;
}

.panel-title div.label-map{
	float: right;
	margin-right: 16px;
	color: #50535B;
}

/* table rt */
.bootstrap-table .table{
	border:0px;
}

.fixed-table-container{
	border: 0px;
}

.fixed-table-container tbody td{
	border: 0px;
	font-size: 16px;
	color: #FFF;
	letter-spacing: 1px;
}

.bootstrap-table .table > thead > tr > th{
	border: 0px;
	background-color: #191919;
	text-align: left;
}

.fixed-table-container thead th .both{
	background-image: none;
}

.fixed-table-container thead th .desc{
	background-image: url(../img/sort_desc.png);
	color: #D22227;
	background-position-x: 95%;
}
.fixed-table-container thead th .asc{
	background-image: url(../img/sort_asc.png);
	color: #D22227;
	background-position-x: 95%;
}

.bootstrap-table .table:not(.table-condensed), .bootstrap-table .table:not(.table-condensed) > tbody > tr > th, .bootstrap-table .table:not(.table-condensed) > tfoot > tr > th, .bootstrap-table .table:not(.table-condensed) > thead > tr > td, .bootstrap-table .table:not(.table-condensed) > tbody > tr > td, .bootstrap-table .table:not(.table-condensed) > tfoot > tr > td{
	padding: 8px 0px;
}

.fixed-table-container thead th .th-inner, .fixed-table-container tbody td .th-inner{
	padding: 8px 0px;
	padding-left: 5px;
}

.td-class-1 span{
	line-height: 32px;
    vertical-align: top;
    font-size: 16px;
    color: #FFF;
    margin-left: 15px;
    font-weight: bold;
}

.icon_cont_tr{
    width: 32px;
    margin-left: 3px;
    float: left;
    text-align: -webkit-center;
    height: 32px;
}

.icon_cont_tr .supervisory_icon{
	width: 32px;
	height: 32px;
	background-image: url(../img/supervisory_icon.svg);
}

.icon_cont_tr .banking_icon{
	width: 32px;
	height: 32px;
	background-image: url(../img/banking_icon.svg);
}

.icon_cont_tr .consumer_icon{
	width: 32px;
	height: 32px;
	background-image: url(../img/consumer_icon.svg);
}

.icon_cont_tr .services_icon{
	width: 32px;
	height: 30px;
	background-image: url(../img/services_icon.svg);
}

.icon_cont_tr .financial_icon{
	width: 28px;
	height: 32px;
	background-image: url(../img/financial_icon.svg);
}

.icon_cont_tr .financial_crime_icon{
	width: 32px;
	height: 22px;
	background-image: url(../img/financial_crime_icon.svg);
	top: 5px;
    position: relative;
}

.icon_cont_tr .insurance_icon{
	width: 28px;
	height: 32px;
	background-image: url(../img/insurance_icon.svg);
}

.icon_cont_tr .pensions_icon{
	width: 22px;
	height: 32px;
	background-image: url(../img/pensions_icon.svg);
}



/* end table rt*/


.news-db{
	width:-webkit-calc(50% - 5px);
	width:-moz-calc(50% - 5px);
	width:calc(50% - 5px);
	height: 600px;
	overflow: auto;
	float: left;
	margin-left: 10px;
	margin-bottom:86px;
	margin-top: 10px;
}

.news-db-title{
	height: 50px;
	background-color: #232323;
	line-height: 50px;
	color: #FFF;
}

.news-db-title img, .news-db-title div{
	float: left;
	letter-spacing: 2px;
}

.news-db-title img{
	top: 15px;
    position: relative;
    margin-left: 13px;
    margin-right: 8px;
}

.news-db-title div.news-db-label-map{
	float: right;
	margin-right: 16px;
	color: #50535B;
}

.news-db-container{
	width: 100%;
	background-color: #333333;
	margin-top: 10px;
	height: 95px;
}

.news-db-date{
	width: 95px;
	height: 95px;
	background-image: url(../img/map_bg_news.png);
    background-repeat: no-repeat;
    background-position: 50%;
    background-color: #232323;
    text-align: center;
    position: relative;
    float: left;
}

.news-db-date div{
	position: relative;
    top: 65px;
    color: #FFF;
}

.news-db-content{
	width:-webkit-calc(100% - 95px);
	width:-moz-calc(100% - 95px);
	width:calc(100% - 95px);
	float: left;
	position: relative;
}

.news-db-header{
	padding: 12px 18px 5px 15px;
    color: #FFF;
    font-size: 18px;
}

.news-db-text{
    padding: 0px 15px;
    height: 38px;
    line-height: 19px;
    white-space: normal;
    overflow-y: hidden;
}

.news-db-text a{
	color: #B9252A;
	text-decoration: none;
	text-decoration-color: #B9252A;
}

.opened .news-db-text{
	color: #FFF;
}

.arrow{
	width: 11px;
	height: 7px;
	background-image: url(../img/arrow_down_closed.png);
	position: absolute;
	bottom: -5px;
    right: 15px;
    cursor: pointer;
}

.opened .arrow{
	background-image: url(../img/arrow_down_opened.png);
}

/* Alerts DB*/

.alerts-db{
	width: 100%;
    clear: both;
    height: 33px;
    overflow-y: hidden;
    margin-bottom: 33px;
    position: fixed;
    bottom: 0px;
    background-color: #232323;
}

.alerts_logo{
	width: 84px;
    height: 33px;
    background-color: #1e1e1e;
    float: left;
    background-image: url(../img/alerts_logo-s.svg);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 65px;

}

.alert-db{
	float: left;
}

.alert-db-icon{
	float: left;
	width: 33px;
	height: 33px;
	background-color: #191919;
	background-repeat: no-repeat;
	background-image: url(../img/arrow_alert-s.png);
	background-position: 50%;
	background-position-y: 50%;
	margin: 0px 15px;
}

.alert-db-label{
	line-height: 33px;
    /*margin: 0px 25px;*/
    float: left;
    color: #FFF;
    font-size: 12px;
    
}

.alert-db-label a{
	letter-spacing: 1px;
}

/*.alert-db-label a{
	padding: 0px 25px;
}*/

/* Ticker */

.TickerNews{
	width: 100%;
	height: 50px;
	line-height: 48px;
}
.ti_wrapper{
	/*width: 100%;*/
	position: relative;
	overflow: hidden;
}
.ti_slide{
	width: 30000px;
	position: relative;
	left: 0;
	top: 0;
}
.ti_content{
	width: 8000px;
	position: relative;
	float:left;
}
.ti_news{
	float:left;
}
.ti_news a{
	display: block;
	text-decoration: none;
	color: #FFF;
}

/* Search Page*/
.search_table{
	background-color: #3A3A3A;
    width: 100%;
    position: relative;
    margin-bottom: 53px;
}
.search-results-title {
	line-height: 50px;
    color: #FFF;
    height: 50px;
    position: relative;
    background-color: #232323;
}

.search-results-title img{
	float: left;
	margin: 14px 11px 0px 11px;
}

.search-results-label{
	float: left;
	letter-spacing: 1px;
}

.selected_label{
	color: #DA2128;
	margin-left: 11px;
	float: right;
}

.search-results-container{
	clear: both;
}

.search-result-container{
	width:-webkit-calc(100% - 20px);
	width:-moz-calc(100% - 20px);
	width:calc(100% - 20px);
	margin-left: 10px;
    background-color: #333333;
    margin-top: 10px;
    height: 150px;
}

/* SVG */
svg g.continent{
	cursor: pointer;
}

svg path, svg polygon{
	fill: #333333;
	stroke-width:1px;
}

svg #asiapacific.selected path,
svg #northamerica.selected path,
svg #middleeast.selected path,
svg #europe.selected path,
svg #southafrica.selected path,
svg #asiapacific.selected polygon,
svg #northamerica.selected polygon,
svg #middleeast.selected polygon,
svg #europe.selected polygon{
	fill: #50535B;
}

svg #asiapacific:hover path,
svg #northamerica:hover path,
svg #middleeast:hover path,
svg #europe:hover path,
svg #asiapacific:hover ,
svg #northamerica:hover polygon,
svg #middleeast:hover polygon,
svg #europe:hover polygon{
	stroke: #3E4B70;
}

/* Search Results*/
.search-title{
	height: 50px;
    line-height: 50px;
    width: 100%;
    background-color: #232323;
}

.search-title-label{
	color: #FFF;
	margin-left: 18px;
	line-height: 20px;
	float: left;
	width:60%;
	word-wrap: break-word;
}

.search-title button{
	margin-top: 10px;
	margin-right: 13px;
	width: 120px;
}

.search-result-date {
    width: 95px;
    height: 100px;
    background-image: url(../img/map_bg_news.png);
    background-repeat: no-repeat;
    background-position: 50% 10px;
    background-color: #232323;
    text-align: center;
    position: relative;
    float: left;
    background-size: 70px;
}


.search-title button.tracker-btn{
	margin-right: 14px;
    width: 112px;
}

.search-result-date .date-label {
    color: #FFF;
    position: relative;
    bottom: -30px;
    color: #7E838E;
    font-size: 12px;
}

.icon_cont_tr_red {
    width: 41px;
    text-align: center;
    position: relative;
    top: 20px;
    margin: auto;
}

.search-result-icon {
	width: 95px;
    height: 100px;
    background-color: #2D2D2D;
    text-align: center;
    position: relative;
    float: left;
    background-size: 70px;
}

.icon_cont_tr_icon {
	width: 41px;
    text-align: center;
    position: relative;
    top: 20px;
    margin: auto;
}

.search-result-icon .icon-label{
	color: #FFF;
    position: relative;
    bottom: -30px;
    color: #7E838E;
    font-size: 12px;
}

.search-result-content{
	width: -webkit-calc(100% - 195px);
    width: -moz-calc(100% - 195px);
    width: calc(100% - 195px);
    float: left;
    position: relative;
}

.button-with-icon{
	padding: 3px 15px;
}


.button-with-icon span{
    line-height: 19px;
    position: relative;
    top: -2px;
}

.button-with-icon img{
	position: relative;
    top: 2px;
    right: -3px;
}

.search-result-header{
	margin: 9px 8px 7px 13px;
    height: 30px;
    position: relative;
}

.search-result-title{
    position: absolute;
    bottom: 0px;
    float: left;
    color: #FFF;
    font-size: 18px;
    line-height: 18px;
}

.search-result-text{
	padding: 0px 15px;
    height: 38px;
    line-height: 19px;
    white-space: normal;
    overflow-y: hidden;
    max-width: 500px;
}

.search-result-container .selected {
	color: #DA2128;
}

.name_profile:hover{
	color: #FFF;
}

/* Profile Page */
.profile-left{
	background-color: #333333;
    width: -webkit-calc(50% - 5px);
    width: -moz-calc(50% - 5px);
    width: calc(50% - 5px);
    float: left;
    position: relative;
    margin-top: 10px;
}

.profile-right{
	width: -webkit-calc(50% - 5px);
    width: -moz-calc(50% - 5px);
    width: calc(50% - 5px);
    float: left;
    margin-left: 10px;
    margin-bottom: 155px;
    margin-top: 10px;
}

.profile-container{
	padding: 20px;
	height: 160px;
	position: relative;
}

.pass-profile{
	width: -webkit-calc(50% - 5px);
    width: -moz-calc(50% - 5px);
    width: calc(50% - 5px);
    float: left;
    margin-left: 10px;
    margin-top: 10px;
}

.pass-profile-title{
	height: 50px;
    background-color: #232323;
    line-height: 50px;
    color: #FFF;
}

.pass-profile-title img {
    top: 15px;
    position: relative;
    margin-left: 13px;
    margin-right: 8px;
}

.pass-profile-title img, .pass-profile-title div {
    float: left;
    letter-spacing: 2px;
}

.password-container{
	padding: 20px;
	height: 160px;
	position: relative;
	background-color: #333333;
}

.buttons-profile-headers{
	margin-top: 10px;
    margin-right: 10px;
}

.image-profile{
	width: 160px;
	height: 160px;
	float: left;
}

.profile-info{
	margin-left: 12px;
    float: left;
    position: relative;
    height: 100%;
    width: -webkit-calc(100% - 172px);
    width: -moz-calc(100% - 172px);
    width: calc(100% - 172px);
}

.profile-name{
	font-size: 18px;
	color: #FFF;
}

.profile-email{
	font-size: 16px;
    line-height: 16px;
    margin-top: 12px;
}

.profile-buttons{
	position: absolute;
    bottom: 0px;
    width: 100%;
}

.pass-buttons{
    width: 100%;
    position: absolute;
    right: 20px;
    bottom: 20px;
}

.pass-newtitle{
	margin-left: 115px;
	color: #FFF;
	font-size: 18px;
}

.pass-new div, .pass-new2 div{
    width: 115px;
    float: left;
    line-height: 25px;
    height: 25px;
    font-size: 16px;
}

.pass-new input, .pass-new2 input{
	margin-bottom: 0px;
}

.pass-new, .pass-new2{
	margin-top: 20px;
}

.subs-profile{
	background-color: #333333;
    width: 100%;
    float: left;
    position: relative;
    margin-top: 10px;
    margin-bottom: 53px;
}

.doc-type {
	height: 32px;
	line-height: 32px;
	color: #FFF;
}

.doc-type div{
    height: 32px;
    float: left;
    background-size: 26px 32px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    padding-left: 57px;
    white-space: nowrap;
}

.doc-type .pdf-icon{
	background-image: url(../img/pdf_icon-gray.svg);
	background-position: 10px 100%;
}
.doc-type .interactive{
	background-size: 37px 32px;
	background-image: url(../img/interactive_icon-gray.svg);
}

/* Alerts archive */

.alerts_archive .search-result-icon .icon-label{
    bottom: -40px;
}

.alerts_archive_details{
	position: relative;
    top: 5px;
    right: -3px;
    float: right;
    width: 16px;
    height: 9px;
    margin-left: 5px;
    background-image: url(../img/arrow_close.png);
}

.alerts_archive_details_b.opened .alerts_archive_details{
	background-image: url(../img/arrow_open.png);
}

.alerts_archive .search-result-text{
	max-width: -webkit-calc(100% - 150px);
	max-width:-moz-calc(100% - 150px);
	max-width: calc(100% - 150px);
}

.alerts_archive_details_b.button-with-icon span{
	top: 0px;
}

.container{
	position: relative;
}

.col-dates{
	float: left;
}

.col-dates .form-control{
  height: 11px;
  padding: 7px 6px;
  color: #50535B;
}

.col-dates .input-group{
	width: 111px;
	float: left;
	margin-left: 10px;
}

.datepicker.dropdown-menu th, .datepicker.dropdown-menu td {
    padding: 0px 0px;
}

.container-dates{
	position: relative;
	right: 11px;
	float: right;
	top: 11px;
}

.hl-calendar{
	padding: 0px;
    margin: 0px;
    height: 18px;
    width: 18px;
}

.col-dates .input-group-addon:hover{
	background-color: #f91515;
}

.hl-calendar:before{
	content:url('../img/calendar.svg');
	width: 16px;
	height: 16px;
}

.datepicker table tr td.today, .datepicker table tr td.today:hover, .datepicker table tr td.today.disabled, .datepicker table tr td.today.disabled:hover{
	background-color: #D22225 !important;
    border-color: #D22225 !important;
    background-image: none;
    color: #FFF;
}

.datepicker table tr td.active.active{
	background-color: #333333 !important;
    border-color: #333333 !important;
}

.col-dates .input-group-addon{
	background-color: #AF202B;
	padding: 4px 5px 0px 6px;
	cursor: pointer;
}

.datepicker.dropdown-menu{
	top: 43px !important;
}

.control-label {
	line-height: 27px;
	float: left;
	margin-left: 13px;
	color: #7E838E;
}

.btn-search{
	padding: 3.5px 10px;
	margin-left: 11px;
}

.search-title  .btn-search-archive{
	padding: 3.5px 25px;
	background-color: transparent !important;
	background-image: url(../img/archive_icon.png);
	background-repeat: no-repeat;
	background-position: 100% 50%; 
	width: 64px;
}

/* Manage Alerts */
.amanage-db{
	background-color: #333333;
    float: left;
    position: relative;
    width: -webkit-calc(100% - 20px);
    width: -moz-calc(100% - 20px);
    width: calc(100% - 20px);
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 53px;
}

.icon_cont_tr .manage_alerts{
	width: 30px;
	height: 30px;
	background-image: url(../img/alert_archive_icon.svg);
}

.btn-manage-alert{
	margin-top: 10px;
    margin-right: 13px;
}

/* advance search */
.search_table_advance {
    height: 50px;
    background-color: #232323;
    line-height: 50px;
    color: #FFF;
    font-size: 14px;
}

.search_table_advance .content-header-max .open.tracker {
    position: absolute;
    right: 32px;
    top: 14px;
}

.search_table_advance .open.tracker {
    width: 61px;
    height: 18px;
    background-image: url(../img/panel-close-icon-h.svg);
}

.search_table_advance img, .search_table_advance .open.tracker {
    position: relative;
    margin-left: 13px;
    margin-right: 8px;
}

.search_table_advance img, .search_table_advance div {
    float: left;
    letter-spacing: 2px;
}

.regulation-tracker div.input-group-search-uview{
	width: 410px;
	margin: 0px;
	margin-bottom: 20px;
	position: relative;
}

.regulation-tracker div.input-group-search-uview input.form-control{
	width: -webkit-calc(100% - 52px);
	width: -moz-calc(100% - 52px);
	width: calc(100% - 52px);
}

.advanced_selection{
	clear: both;
}

.zsearch2 .input-group-btn{
	position: absolute;
	right: 1px;
}

.panel_container_a{
	padding: 0px 40px 21px 40px;
    position: relative;
}

.advanced_selection_checks{
	margin: 0px;
	padding: 0px;
	border: 0px;
	width: 100%
}

.advanced_selection_checks td{
	width: 33.3%;
}

.advanced_selection_checks td span{
	margin-left: 3px;
}

.advanced_selection_checks td:first-child span{
	margin-left:0px;
}

.advanced_selection_checks td:last-child span{
	margin-left:6px;
}

.advanced_selection_checks td ul{
	margin:8px 3px 16px 3px;
}

.advanced_selection_checks td:first-child ul{
	margin-left:0px;
	margin-right:6px;
}

.advanced_selection_checks td:last-child ul{
	margin-right:0px;
	margin-left:6px;
}

.advanced_selection_checks .checks td{
	vertical-align: top;
}

.advanced_selection_checks .checks ul{
	height: 94px;
	overflow-y: auto;
	overflow-x: hidden;
}

.advanced_selection_checks ul{
	list-style: none;
    padding: 0px;
    margin: 0px;
    background-color: #FFF;
    padding-left: 3px;
    border: 1px solid #E1E4EA;
}

.advanced_selection_checks li{
	background-image: url(../img/light/cb-unchecked.png);
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-position-y: 50%;
    padding-left: 22px;
    line-height: 15px;
    width: 250px;
    vertical-align: middle;
    color: #50535B;
    cursor: pointer;
    padding-bottom: 2px;
    padding-top: 2px;
}

.advanced_selection_checks li.selected {
    color: #50535B;
    background-image: url(../img/light/cb-checked.png);
}

.ad_button_s{
	margin-left: 11px;
}

.delete_alert_img{
	top: 1px;
    position: relative;
}

/* Tables tracker */

.table.tracker_page > thead > tr > th,
.table.tracker_page > tbody > tr > th,
.table.tracker_page > tfoot > tr > th,
.table.tracker_page > thead > tr > td,
.table.tracker_page > tbody > tr > td,
.table.tracker_page > tfoot > tr > td {
  border-top: 1px solid #333333;
  color: #FFF;
  overflow: hidden;
  position: relative;
}

.table-hover tbody > tr:hover{
  background-color: #3D3D3D;
}


/* Edit alerts */

.backbtn:hover{
	color: #D22227;
	cursor: pointer;
}

.editalerts-db {
    background-color: #333333;
    float: left;
    position: relative;
    width: -webkit-calc(100% - 20px);
    width: -moz-calc(100% - 20px);
    width: calc(100% - 20px);
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 53px;
}

.edit_alert_btn{
	margin-left: 11px;
	height: 15px;
    line-height: 15px;
}

.edit_alert_btn2{
	margin-left: 11px;
	height: 15px;
    line-height: 15px;
    position: absolute;
    top: 0px;
    padding: 7px 12px;
}

.pick_table{
	width: 100%;
	margin-top: 20px;
	margin-bottom: 20px;
}

.pick_table tr:first-child td{
	padding-bottom: 22px;
}

.pick_table tr td{
	padding-bottom: 20px;
	position: relative;
	white-space: nowrap;
}

.pick_table td.column_big{
	color: #FFF;
    font-size: 16px;
    
	width: 41%;
}

.pick_table tr td:last-child{
	width: 95px;
}

.pick_table input{
	border: 2px solid #F0F1F4;
    height: 25px;
    padding: 0px;
    line-height: 25px;
    vertical-align: middle;
    width:-webkit-calc(100% - 9px);
	width:-moz-calc(100% - 9px);
	width: calc(100% - 9px);
   	color: #777;
    padding-left: 5px;
    font-size: 14px;
}

.pick_table .title_list1{
	font-size: 16px;
    color: #7E838E;
    text-align: right;
    line-height: 27px;
}

.pick_table .title_list1 span{
    margin-right: 11px;
}

.pick_table .title_list3{
	font-size: 16px;
    color: #7E838E;
    text-align: right;
    line-height: 27px;
    top: 0px;
    position: absolute;
    right: 0px;
}

.pick_table .title_list3 span{
    margin-right: 11px;
}

.pick_table .pickListSelect {
	width:-webkit-calc(100% - 4px);
	width:-moz-calc(100% - 4px);
	width: calc(100% - 4px);
	border: 0px;
	padding-top: 9px;
	padding-bottom: 9px;
	overflow-y: auto;
	border: 2px solid #F0F1F4;
}

.pick_table .pickListSelect .option{
    padding: 1px 5px;
    margin: 0px 5px;
    cursor: pointer;
}

.pick_table .pickListSelect .option:first-child{
	/*margin-top: 9px;*/
}

.pick_table .pickListSelect .option:last-child{
	margin-bottom: 9px;
}

.pick_table .pickListSelect .option:hover,
.pick_table .pickListSelect .option.active,
.pick_table .pickListSelect .option.selected{
	background-color: #D22227 !important;
	color: #FFF;
}

.pick_table .select_all {
	position: absolute;
	bottom: 20px;
	left: 0px;
	padding-left: 20px;
	background-image: url(../img/cb-unchecked.png);
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-position-y: 50%;
    cursor: pointer;
}

.pick_table .select_all.selected{
	color: #FFF;
	background-image: url(../img/cb-checked.png);
}

.pick_table .select_btn{
	background-image: url(../img/picklist/select.png);
    background-repeat: no-repeat;
    background-size: 8px 13px;
    background-position-y: 50%;
    width: 8px;
    height: 28px;
}

.pick_table .deselect_btn{
	background-image: url(../img/picklist/deselect.png);
    background-repeat: no-repeat;
    background-size: 8px 13px;
    background-position-y: 50%;
    width: 8px;
    height: 28px;
}

.pick_table .btn-primary.active .select_btn, .pick_table .btn-primary:hover .select_btn{
	background-image: url(../img/picklist/select_rollover.png);
}

.pick_table .btn-primary.active .deselect_btn, .pick_table .btn-primary:hover .deselect_btn{
	background-image: url(../img/picklist/deselect_rollover.png);
}

.pick_table .btn-primary{
    width: 27px;
    text-align: -webkit-center;
    height: 28px;
    background-color: #AF202B;
    border-color: #AF202B;
    border-radius: 5px;
    opacity: 0.5;
}

.pick_table .btn-primary.btn-primary-top{
	position: absolute;
	top: 0px;
	padding: 0px 12px;
}

.pick_table .btn-primary.btn-primary-bottom{
	position: absolute;
	bottom: 20px;
	padding: 0px 12px;
}

.pick_table .buttons_middle{
	width: 51px;
    margin: 0px 8px;
}

.btn-primary:focus,
.btn-primary.focus {
  /*background-color: none !important;
  border-color: #AF202B !important;*/
}
.btn-primary:hover {
  opacity: 1;
}
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  opacity: 1;
}

.pick_table .border_top_table td{
	border-top: 1px solid #4C4C4C;
    padding-top: 20px;
}

.pick_table .border_top_table .title_list3, .pick_table .border_top_table .btn-primary-top, .pick_table .border_top_table .edit_alert_btn2{
	top: 20px;
}

.buttons_edit_save{
	margin-bottom: 32px;
    height: 32px;
    padding-top: 10px;
}


/* Table Tracker */
.tracker_page th{
	font-size: 14px !important; 
	color:#50535B !important;
	background-color: #191919 !important;
	border-bottom: 2px solid #333333 !important;
}

/*.small_col .headrowsort{
	color: transparent;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	background-size: 10px 100%;
	width: 10px;
	height: 72px;
	padding-left: 0px;
	left: -webkit-calc(50% - 5px);
	left: -moz-calc(50% - 5px);
	left: calc(50% - 5px);
    position: relative;
}*/

.small_col{
	padding-left: 0px;
	padding-top: 0px !important;
}

/*.small_col .article_ref{background-image: url(../img/table_tracker/article-ref.svg);}
.small_col .documents{background-image: url(../img/table_tracker/documents.svg);}
.small_col .regulation{background-image: url(../img/table_tracker/regulation.svg);
	background-size: 13px 100%;
	width: 13px;
}
.small_col .analysis{background-image: url(../img/table_tracker/analysis.svg);
	background-size: 13px 100%;
	width: 13px;
}
.small_col .comments{background-image: url(../img/table_tracker/comments.svg);}
.small_col .level-1-2{background-image: url(../img/table_tracker/level-1-2.svg);
	background-size: 12px 100%;
	width: 12px;
}
.small_col .business{background-image: url(../img/table_tracker/business.svg);}
.small_col .theme{background-image: url(../img/table_tracker/theme.svg);}
.small_col .update{background-image: url(../img/table_tracker/update.svg);
	background-size: 13px 100%;
	width: 13px;
}*/

.tracker_page {
	background-color: #3F3F3F;
    opacity: 1;
    border: 1px solid #333333;
    margin: 0;
}

.tracker_page tr td{
	padding-left: 12px !important;
	padding-right: 12px !important;
	font-size: 11px;
}

.tracker_page tr td.small_col div{
	display: none;
}

.arrow_alerts_menu{
	width: 8px;
	height: 13px;
	background-image: url(../img/arrow_alerts.png);
	margin: 3px 4px;
	float: left;
}

.open_menu .arrow_alerts_menu{
	background-image: url(../img/arrow_alerts_open.png);
	width: 12px;
	height: 8px;
	margin: 7px 4px;
}

.menu_alerts{
	width: 174.5px;
    color: #7E838E;
    background-color: #231F20;
    left: 40px;
    position: absolute;
    top: 20px;
    white-space: nowrap;
    display: none;
}

.open_menu .menu_alerts{
	display: block;
}

.menu_alerts div{
	padding:11px 20px;
	width: -webkit-calc(100% - 40px);
	width: -moz-calc(100% - 40px);
	width: calc(100% - 40px);

}

.menu_alerts div:hover{
	color: #FFF;
	background-color: #AF202B;
}

.showFilter{
	width: 11px;
	height: 7px;
	background-image: url(../img/sort.png);
	cursor: pointer;
}

.open_filter .showFilter{
	background-image: url(../img/sort_open.png);
}

.minus_icon{
    width: 11px;
    height: 1px;
    background-color: #FFF;
    float: left;
    line-height: 28px;
    top: 10px;
    position: relative;
    margin-right: 3px;
}


@media (max-width: 1145px) {
	.navmenu{
		display: none;
	}

	.hamburger-menu {
		display: block;
	}

	.page-content{
		background-position: 50% 20%;
	}
	.page-content-forget{
		background-position: 50% 20%;
	}

	ul.navmenu{
		/* position: relative; */
	    /* float: left; */
	    /* margin-top: 10px; */
	    padding-left: 35px;
	    position: absolute;
	    top: 64px;
	    background-color: #000;
	    width: 100%;
	    float: none;
	    padding-top: 20px;
	    padding-bottom: 20px;
	}

	ul.navmenu li {
		padding: 0px 45px 0px 0px;
		text-align: center;
		line-height: 30px;
		list-style: none;
		text-align: left;
		float: none;
	}

	.close-menu{
	    position: absolute;
	    width: 51px;
	    height: 60px;
	    background-color: #000;
	    left: 110px;
	    top: 14px;
	    text-align: center;
	}

	.close-menu img{
		top: 15px;
		position: relative;
		margin: auto;
	}

	.close-menu2{
		position: absolute;
	    right: 48px;
	    top: 12px;
	    cursor: pointer;
	}

	.zkuserdetails, .zksettings{
		display: block;
	}

	/* Dash board*/

	.map-container {
		height: auto;
	}

	#mainMap{
		width:-webkit-calc(100% - 150px);
		width:-moz-calc(100% - 150px);
		width: calc(100% - 150px);
    	height: auto;
	}

	.map-container {
	    height: auto;
	    padding-left: 0px;
	    width:-webkit-calc(100% - 30px);
		width:-moz-calc(100% - 30px);
	    width: calc(100% - 30px);
	    text-align: left;
	}

	.selection-map{
		right: 20px;
    	top: 30px;
	}

	.rt-db{
		width: 100%;
	}

	.news-db{
		width: 100%;
		margin-left: 0px;
	}

	.pass-profile{
		width: 100%;
		margin-left: 0px;
	}

	.profile-left{
		width: 100%;
	}

	.profile-right{
		width: 100%;
		margin-left: 0px;
	}	
}

@media (max-width: 960px) {
	.panel-pdf-title .btn{
		display: none !important;
	}
}

});