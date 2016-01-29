/*
LICENSED UNDER THE Q PUBLIC LICENSE version 1.0;
Copyright (C) 1999-2005 Trolltech AS, Norway.
You may obtain a copy of the License at
https://opensource.org/licenses/QPL-1.0
The Software and this license document are provided
AS IS with NO WARRANTY OF ANY KIND, INCLUDING THE
WARRANTY OF DESIGN, MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE.
This license is governed by the Laws of Norway.
Disputes shall be settled by Oslo City Court.
Parts of this code has been borrowed and rewritten
with permission from the owners of the dubx project
(https://github.com/sinfulBA/DubX-Script)
*/
/*global Dubtrack*/
var run;
if (!run) {
    run = true;
    var help = '/help - For help about cms!';
    var motd = 'Custom Mentions!';
    var version = 'Version - 11.8.2';
    var options = {
        autovote: false,
        workmode: false,
        chatmode: false,
        roomcss: false,
        inputbg: false,
        inputcss: false,
        userjoin: false,
        userleave: false,
        userddub: false,
        userudub: false,
        usergrab: false,
        workfade: false,
        lights: false,
        delmsg: false,
        delm: false,
        clearchat: false,
        cc: false,
        cmen: false,
        afkmsg: false,
        confirmunban: false,
        confirmunmute: false,
        updubhover: false,
        downdubhover: false,
        grabhover: false,
        cmentoggle: false,
        afktoggle: false,
        afkto: false,
    };

    var functions = {
        fade: function() {
            $('.main_content').fadeToggle('slow');
        },
        menufade: function() {
            if (!options.workfade) {
                $('.main_content').fadeToggle('slow');
            }
        },
        mainmenu: function() {
            var grabs = [
            '<div class="grablist" style="display: none;">',
                    '<center>',
                        '<div class="grablistheader" style="margin-top: 10px;">',
                            '<h1>Grabs</h1>',
                        '</div>',
                        '<div class="grablistpeople" style="margin-top: 10px;margin-bottom:10px;">',
                        '</div>',
                    '</center>',
                '</div>'
            ].join('');
            var updubs = [
                '<div class="updublist" style="display: none;">',
                    '<center>',
                        '<div class="updublistheader" style="margin-top: 10px;">',
                            '<h1>Updubs</h1>',
                        '</div>',
                        '<div class="updublistpeople" style="margin-top: 10px;margin-bottom:10px;">',
                        '</div>',
                    '</center>',
                '</div>'
            ].join('');
            var downdubs = [
                '<div class="downdublist" style="display: none;">',
                    '<center>',
                        '<div class="downdublistheader" style="margin-top: 10px;">',
                            '<h1>Downdubs</h1>',
                        '</div>',
                        '<div class="downdublistpeople" style="margin-top: 10px;margin-bottom:10px;">',
                        '</div>',
                    '</center>',
                '</div>'
            ].join('');
            var dtapi = '<a class="dtapibtn" href="http://docs.dubtrackfmapiv11.apiary.io/" target="blank">Dubtrack API</a>';
            var ebtn = '<a class="CMSEbtn" onclick="functions.fade();">CMS</a>';
            var btn = '<span class="CMSbtn" onclick="functions.fade();" style="margin-left:3px;">CMS</span>';
            var settingbtn = [
                '<span class="chat-option-header">CMS</span>',
                '<div class="chat-option-buttons cmsbtns">',
                    '<span class="cmsbtns" onclick="functions.fade();">Main menu</span>',
                    '<span class="cmsbtns" onclick="functions.chatmode();">Chat mode</span>',
                '</div>'
            ].join('');
            var welcome = [
                '<li class="chat-welcome-message" style="text-align: center; color: #CCC;"><br><br><br>',
                    '<span>Welcome '+Dubtrack.session.get('username')+'!</span><br>',
                    '<span>CMS '+version+'</span><br>',
                    '<span>'+motd+'</span><br><br>',
                    '<span>For Bugs and Suggestions Please Go To:</span><br>',
                    '<span>',
                        '<img class="emoji" src="https://dubtrack-fm.s3.amazonaws.com/assets/emoji/images/emoji/point_right.png" title=":point_right:" alt=":point_right:" align="absmiddle"></img>',
                        '<a href="https://github.com/mitchdev/cms"> Our Github </a>',
                        '<img class="emoji" src="https://dubtrack-fm.s3.amazonaws.com/assets/emoji/images/emoji/point_left.png" title=":point_left:" alt=":point_left:" align="absmiddle"></img>',
                    '</span><br><br><br>',
                '</li>'
            ].join('');
            var mainmenu = [
                '<link rel="stylesheet" type="text/css" href="https://rawgit.com/Mitchdev/CMS/master/main.css">',
                '<div class="main_content">',
                    '<div class="headerbox" onclick="functions.menufade();">',
                        '<span class="main_content_ver"><center>CMS</center></span>',
                        '<span class="main_content_version"><center>'+version+'<br>'+motd+'<br><br>'+help+'</center></span>',
                    '</div>',
                    '<ul class="main_content_ul">',
                        '<ul>',
                            '<li onclick="functions.autovote();" class="main_content_li main_content_feature autovote">',
                                '<p class="main_content_p">Autovote</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.clearchat();" class="main_content_li main_content_feature clearchat">',
                                '<p class="main_content_p">Auto Clear Chat</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.workmode();" class="main_content_li main_content_feature workmode">',
                                '<p class="main_content_p">Work Mode</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.chatmode();" class="main_content_li main_content_feature chatmode">',
                                '<p class="main_content_p">Chat Mode</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.deletemsg();" class="main_content_li main_content_feature deletemsg">',
                                '<p class="main_content_p">Hide Deleted Messages</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.roomcss();" class="main_content_li main_content_feature roomcss">',
                                '<p class="main_content_p">Community Theme</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.userjoin();" class="main_content_li main_content_feature userjoin">',
                                '<p class="main_content_p">Join Message</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.userleave();" class="main_content_li main_content_feature userleave">',
                                '<p class="main_content_p">Leave Message</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.usergrab();" class="main_content_li main_content_feature usergrab">',
                                '<p class="main_content_p">Grab Message</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.userudub();" class="main_content_li main_content_feature userudub">',
                                '<p class="main_content_p">Up Dub Message</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.afkmsg();" class="main_content_li main_content_feature afkmsg">',
                                '<p class="main_content_p">Custom Afk Message</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Edit</span></p>',
                            '</li>',
                            '<div class="INPUT AFKMSG">',
                                '<li>',
                                    '<textarea class="input afk" placeholder="I am currently afk at the moment."></textarea>',
                                    '<center class="edit">',
                                        '<span class="CMSconfirm" onclick="functions.afkmsgc();" style="float: left;">Confirm</span>',
                                        '<li class="afktoggle"><p onclick="functions.afktoggle();" class="main_content_off edt"><span class="CMSdisabled">Disabled</span></p></li>',
                                    '</center>',
                                '</li>',
                                '<br>',
                            '</div>',
                            '<li onclick="functions.cmen();" class="main_content_li main_content_feature cmen">',
                                '<p class="main_content_p">Custom Mentions</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Edit</span></p>',
                            '</li>',
                            '<div class="INPUT CMEN">',
                                '<li>',
                                    '<textarea class="input cmen" placeholder="bill, bob, john, jeff"></textarea>',
                                    '<center class="edit">',
                                        '<span class="CMSconfirm" onclick="functions.cmenc();" style="float: left;">Confirm</span>',
                                        '<li class="cmentoggle"><p onclick="functions.cmentoggle();" class="main_content_off edt"><span class="CMSdisabled">Disabled</span></p></li>',
                                    '</center>',
                                '</li>',
                                '<br>',
                            '</div>',
                            '<li onclick="functions.bginput();" class="main_content_li main_content_feature backgroudme">',
                                '<p class="main_content_p">Custom Background</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Edit</span></p>',
                            '</li>',
                            '<div class="INPUT BG">',
                                '<li>',
                                    '<textarea class="input bg" placeholder="https://example.com/example.jpg"></textarea>',
                                    '<center><span class="CMSconfirm" onclick="functions.bgconfirm();">Confirm</span></center>',
                                '</li>',
                                '<br>',
                            '</div>',
                            '<li onclick="functions.cssinput();" class="main_content_li main_content_feature mycss">',
                                '<p class="main_content_p">Custom CSS</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Edit</span></p>',
                            '</li>',
                            '<div class="INPUT CSS">',
                                '<li>',
                                    '<textarea class="input css" placeholder="https://example.com/example.css"></textarea>',
                                    '<center><span class="CMSconfirm" onclick="functions.cssconfirm();">Confirm</span></center>',
                                '</li>',
                                '<br>',
                            '</div>',
                        '</ul>',
                    '</ul>',
                '</div>'
            ].join('');
            var userddub = [
                '<li onclick="functions.userddub();" class="main_content_li main_content_feature userddub">',
                    '<p class="main_content_p">Down Dub Message</p>',
                    '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                '</li>'
            ].join('');
            var unmutebanall = [
                '<li onclick="functions.unmuteconfirm();" class="main_content_li main_content_feature unmute">',
                    '<p class="main_content_p">Unmute Everyone</p>',
                    '<p class="main_content_off"><span class="CMSdisabled">Click</span></p>',
                '</li>',
                '<center class="CONFIRM UNMUTE">',
                    '<span class="CMSconfirm" onclick="functions.unmuteall();">Confirm</span>',
                '</center>',
                '<li onclick="functions.unbanconfirm();" class="main_content_li main_content_feature unban">',
                    '<p class="main_content_p">Unban Everyone</p>',
                    '<p class="main_content_off"><span class="CMSdisabled">Click</span></p>',
                '</li>',
                '<center class="CONFIRM UNBAN" style="margin-top: -10px;">',
                    '<span class="CMSconfirm" onclick="functions.unbanall();">Confirm</span>',
                '</center>'
            ].join('');
            setTimeout(function() {
                $('.chat-main').append(welcome);
                functions.stb();
                $(settingbtn).insertAfter('.chat-option-buttons-sound');
            }, 5000);
            setTimeout(function() {
                if (Dubtrack.room.users.getIfMod(Dubtrack.session.id) || Dubtrack.room.users.getIfManager(Dubtrack.session.id) || Dubtrack.room.users.getIfOwner(Dubtrack.session.id)) {
                    $(userddub).insertAfter('.usergrab');
                }
                if (Dubtrack.room.users.getIfOwner(Dubtrack.session.id)) {
                    $(unmutebanall).insertAfter('.INPUT.CSS');
                    $('.CONFIRM').hide();
                }
            }, 4000);
            setTimeout(function() {
                $('.player-controller-container').append('<span style="display: inline-block;font-size: 1.4rem;top: -.2rem;position: relative;margin-left: .5rem;color: #878c8e;text-transform: uppercase;font-weight: 700;" class="eta">ETA</span>');
                $(dtapi).insertAfter('#main-menu-left .navigate.room-active-link');
                $(ebtn).insertAfter('#main-menu-left .navigate.lobby-link');
                $(btn).insertAfter('.player_header .room-info-display');
                $('body').prepend(mainmenu);
                $('body').append(updubs);
                $('body').append(grabs);
                setTimeout(function() {
                    $('.INPUT').hide();
                }, 6000);
                setTimeout(function() {
                    if (Dubtrack.room.users.getIfMod(Dubtrack.session.id) || Dubtrack.room.users.getIfManager(Dubtrack.session.id) || Dubtrack.room.users.getIfOwner(Dubtrack.session.id)) {
                        $(downdubs).insertAfter('.updublist');
                    }
                }, 4000);
            }, 1000);
        },
        unmuteconfirm: function() {
            if (!options.confirmunmute) {
                $('.INPUT.CMEN').hide();
                $('.INPUT.CSS').hide();
                $('.INPUT.BG').hide();
                $('.INPUT.AFKMSG').hide();
                $('.CONFIRM.UNMUTE').show();
                $('.CONFIRM.UNBAN').hide();
                options.confirmunmute = true;
            } else {
                $('.CONFIRM.UNMUTE').hide();
                options.confirmunmute = false;
            }
        },
        unbanconfirm: function() {
            if (!options.confirmunban) {
                $('.INPUT.CMEN').hide();
                $('.INPUT.CSS').hide();
                $('.INPUT.BG').hide();
                $('.INPUT.AFKMSG').hide();
                $('.CONFIRM.UNMUTE').hide();
                $('.CONFIRM.UNBAN').show();
                options.confirmunban = true;
            } else {
                $('.CONFIRM.UNBAN').hide();
                options.confirmunban = false;
            }
        },
        unmuteall: function() {
            var roomid = Dubtrack.room.model.id;
            $.get('https://api.dubtrack.fm/room/'+roomid+'/users/mute').then(function(r) {
                if (r.code === 200) {
                    r.data.forEach(function(i) {
                        var uuid = i._user._id;
                        if (Dubtrack.room.users.getIfOwner(Dubtrack.session.id)) {
                            Dubtrack.room.chat.unmuteUser(''+uuid+'');
                        } else {
                            $('.chat-main').append('<li class="system"><div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div><div class="text"><span class="system-userleave">You do not have permission to perform this action</span></div></li>');
                        }
                    });
                }
            });
        },
        unbanall: function() {
            var roomid = Dubtrack.room.model.id;
            $.get('https://api.dubtrack.fm/room/'+roomid+'/users/ban').then(function(r) {
                if (r.code === 200) {
                    r.data.forEach(function(i) {
                        var uuid = i._user._id;
                        if (Dubtrack.room.users.getIfOwner(Dubtrack.session.id)) {
                            Dubtrack.room.chat.unbanUser(''+uuid+'');
                        } else {
                            $('.chat-main').append('<li class="system"><div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div><div class="text"><span class="system-userleave">You do not have permission to perform this action</span></div></li>');
                        }
                    });
                }
            });
        },
        hovertoggledowndub: function() {
            $('.dubdown').hover(function() {
                options.downdubhover = true;
                if (options.downdubhover) {
                    $('.downdublist').slideToggle("slow");
                }
            });
            $('.dubdown').mouseout(function() {
                options.downdubhover = false;
            });
        },
        downdublist: function(e) {
            var user = e.user.username;
            setTimeout(function() {
                if (e.dubtype === "downdub") {
                    $('.dd-user-'+user+'').remove();
                    $('.ud-user-'+user+'').remove();
                    $('.downdublistpeople').append('<p id="user-downdub" class="dd-user-'+user+'">@'+user+'</p>');
                }
            }, 1000);
        },
        updatedowndublist: function() {
            $('#user-downdub').remove();
        },
        hovertoggleupdub: function() {
            $('.dubup').hover(function() {
                options.updubhover = true;
                if (options.updubhover) {
                    $('.updublist').slideToggle("slow");
                }
            });
            $('.dubup').mouseout(function() {
                options.updubhover = false;
            });
        },
        updublist: function(e) {
            var user = e.user.username;
            setTimeout(function() {
                if (e.dubtype === "updub") {
                    $('.ud-user-'+user+'').remove();
                    $('.dd-user-'+user+'').remove();
                    $('.updublistpeople').append('<p id="user-updub" class="ud-user-'+user+'">@'+user+'</p>');
                }
            }, 1000);
        },
        updateupdublist: function() {
            $('#user-updub').remove();
        },
        hovertogglegrab: function() {
            $('.add-to-playlist-button').hover(function() {
                options.grabhover = true;
                if (options.grabhover) {
                    $('.grablist').slideToggle("slow");
                }
            });
            $('.add-to-playlist-button').mouseout(function() {
                options.grabhover = false;
            });
        },
        grablist: function(e) {
            var user = e.user.username;
            setTimeout(function() {
                $('.g-user-'+user+'').remove();
                $('.grablistpeople').append('<p id="user-grab" class="g-user-'+user+'">@'+user+'</p>');
            }, 1000);
        },
        updategrablist: function() {
            $('#user-grab').remove();
        },
        deletemsg: function() {
            if (!options.delmsgtoggle) {
                functions.on('.deletemsg');
                options.delm = true;
                functions.delm();
                functions.storage('delmsg', 'true');
            } else {
                functions.off('.deletemsg');
                functions.storage('delmsg', 'false');
                options.delm = false;
                $('.deleted-message').show();
            }
        },
        delm: function() {
            setInterval(function() {
                if (options.delm) {
                    $('.deleted-message').hide();
                }
            }, 2000);
        },
        cssconfirm: function() {
            var text = $('.input.css').val();
            if (text !==null) {
                functions.storage('ccss',text);
                $('.CMSccss').remove();
                $('head').append('<link class="CMSccss" href="'+text+'" rel="stylesheet" type="text/css">');
                $('.INPUT.CSS').hide();
            }
        },
        cssinput: function() {
            if (!options.inputcss) {
                $('.INPUT.CMEN').hide();
                $('.INPUT.CSS').show();
                $('.INPUT.BG').hide();
                $('.INPUT.AFKMSG').hide();
                $('.CONFIRM.UNMUTE').hide();
                $('.CONFIRM.UNBAN').hide();
                options.inputcss = true;
            } else {
                $('.INPUT.CSS').hide();
                options.inputcss = false;
            }
        },
        bgconfirm: function() {
            var text = $('.input.bg').val();
            if (text !==null) {
                functions.storage('bg',text);
                $('.CMSbg').remove();
                $('body').append('<div class="CMSbg" style="background: url('+text+');"></div>');
                $('.INPUT.BG').hide();
            }
        },
        bginput: function() {
            if (!options.inputbg) {
                $('.INPUT.CMEN').hide();
                $('.INPUT.BG').show();
                $('.INPUT.AFKMSG').hide();
                $('.INPUT.CSS').hide();
                $('.CONFIRM.UNMUTE').hide();
                $('.CONFIRM.UNBAN').hide();
                options.inputbg = true;
            } else {
                $('.INPUT.BG').hide();
                options.inputbg = false;
            }
        },
        on: function(theclass) {
            $(theclass + ' .main_content_off').html('<span class="CMSenabled">Enabled</span>');
        },
        off: function(theclass) {
            $(theclass + ' .main_content_off').html('<span class="CMSdisabled">Disabled</span>');
        },
        storage: function(theclass,state) {
            localStorage.setItem(theclass,state);
        },
        vote: function() {
            setTimeout(function() {
                $('.dubup').click();
            }, 1500);
        },
        autovote: function() {
            if (!options.autovote) {
                options.autovote = true;
                functions.storage('autovote','true');
                functions.on('.autovote');
                Dubtrack.Events.bind("realtime:room_playlist-update", functions.vote);
            } else {
                options.autovote = false;
                functions.storage('autovote','false');
                functions.off('.autovote');
                Dubtrack.Events.unbind("realtime:room_playlist-update", functions.vote); 
            }
        },
        workmode: function() {
            if (!options.workmode) {
                options.workfade = true;
                options.workmode = true;
                $('#main-room').fadeToggle('slow');
                functions.on('.workmode');
            } else {
                options.workfade = false;
                options.workmode = false;
                $('#main-room').fadeToggle('slow');
                functions.off('.workmode');
            }
        },
        chatmode: function() {
            if (!options.chatmode) {
                options.chatmode = true;
                $('#main_player').fadeToggle('slow');
                $('head').append('<link class="chatmodecss" rel="stylesheet" href="https://mitchdev.net/CMS/css/chatmode.css">');
                functions.on('.chatmode');
            } else {
                options.chatmode = false;
                $('#main_player').fadeToggle('slow');
                $('.chatmodecss').remove();
                functions.off('.chatmode');
            }
        },
        roomcss: function() {
            if (!options.roomcss) {
                options.roomcss = true;
                var location = Dubtrack.room.model.get('roomUrl');
                $.ajax({
                    type: 'GET',
                    url: 'https://api.dubtrack.fm/room/'+location,
                }).done(function(e) {
                    var content = e.data.description;
                    var url = content.match(/(@cms=)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/);
                    var append = url[0].split('@cms=');
                    $('head').append('<link class="CMScss" href="'+append[1]+'" rel="stylesheet" type="text/css">');
                    });
                functions.storage('css','true');
                functions.on('.roomcss'); 
            } else {
                options.roomcss = false;
                $('.CMScss').remove();
                functions.storage('css','false');
                functions.off('.roomcss');
            }
        },
        userjoin: function() {
            if(!options.userjoin) {
                options.userjoin = true;
                functions.on('.userjoin');
                functions.storage('userjoin','true');
                Dubtrack.Events.bind('realtime:user-join', functions.Euserjoin);
            } else {
                options.userjoin = false;
                functions.off('.userjoin');
                functions.storage('userjoin','false');
                Dubtrack.Events.unbind('realtime:user-join', functions.Euserjoin);
            }
        },
        Euserjoin: function(e) {
            $('.chat-main').append('<li class="system"><div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div><div class="text"><span class="system-userjoin">@'+e.user.username+' just joined</span></div></li>');
            functions.stb();
        },
        userleave: function() {
            if(!options.userleave) {
                options.userleave = true;
                functions.on('.userleave');
                functions.storage('userleave','true');
                Dubtrack.Events.bind('realtime:user-leave', functions.Euserleave);
            } else {
                options.userleave = false;
                functions.off('.userleave');
                functions.storage('userleave','false');
                Dubtrack.Events.unbind('realtime:user-leave', functions.Euserleave);
            }
        },
        Euserleave: function(e) {
            $('.chat-main').append('<li class="system"><div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div><div class="text"><span class="system-userleave">@'+e.user.username+' just left</span></div></li>');
            functions.stb();
        },
        usergrab: function() {
            if (!options.usergrab) {
                options.usergrab = true;
                functions.on('.usergrab');
                functions.storage('usergrab', 'true');
                Dubtrack.Events.bind('realtime:room_playlist-queue-update-grabs', functions.Eusergrab);
            } else {
                options.usergrab = false;
                functions.off('.usergrab');
                functions.storage('usergrab', 'false');
                Dubtrack.Events.unbind('realtime:room_playlist-queue-update-grabs', functions.Eusergrab);
            }
        },
        Eusergrab: function(e) {
            $('.chat-main').append('<li class="system"><div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div><div class="text"><span class="system-usergrab">@'+e.user.username+' grabbed this song</span></div></li>');
            functions.stb();
        },
        userudub: function() {
            if(!options.userudub) {
                options.userudub = true;
                functions.on('.userudub');
                functions.storage('userudub','true');
                Dubtrack.Events.bind('realtime:room_playlist-dub', functions.Euserudub);
            } else {
                options.userudub = false;
                functions.off('.userudub');
                functions.storage('userudub','false');
                Dubtrack.Events.unbind('realtime:room_playlist-dub', functions.Euserudub);
            }
        },
        Euserudub: function(e) {
            if (e.dubtype === "updub") {
                $('.chat-main').append('<li class="system"><div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div><div class="text"><span class="system-userudub">@'+e.user.username+' updubbed this song</span></div></li>');
                functions.stb();
            }
        },
        userddub: function() {
            if (Dubtrack.room.users.getIfMod(Dubtrack.session.id) || Dubtrack.room.users.getIfManager(Dubtrack.session.id) || Dubtrack.room.users.getIfOwner(Dubtrack.session.id)) {
                if(!options.userddub) {
                    options.userddub = true;
                    functions.on('.userddub');
                    functions.storage('userddub','true');
                    Dubtrack.Events.bind('realtime:room_playlist-dub', functions.Euserddub);
                } else {
                    options.userddub = false;
                    functions.off('.userddub');
                    functions.storage('userddub','false');
                    Dubtrack.Events.unbind('realtime:room_playlist-dub', functions.Euserddub);
                }
            } else {
                options.userddub = false;
                functions.off('.userddub');
                Dubtrack.Events.unbind('realtime:room_playlist-dub', functions.Euserddub);
            }
        },
        Euserddub: function(e) {
            if (Dubtrack.room.users.getIfMod(Dubtrack.session.id) || Dubtrack.room.users.getIfManager(Dubtrack.session.id) || Dubtrack.room.users.getIfOwner(Dubtrack.session.id)) {
                if (e.dubtype === "downdub") {
                    $('.chat-main').append('<li class="system"><div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div><div class="text"><span class="system-userddub">@'+e.user.username+' downdubbed this song</span></div></li>');
                    functions.stb();
                }
            }
        },
        Muted: function(e) {
            if (Dubtrack.room.users.getIfMod(Dubtrack.session.id) || Dubtrack.room.users.getIfManager(Dubtrack.session.id) || Dubtrack.room.users.getIfOwner(Dubtrack.session.id)) {
                var username = e.user.username;
                var muted = e.mutedUser.username;
                $('.chat-main').append('<li class="system"><div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div><div class="text"><span class="system-mute">@'+muted+' was muted by @'+username+'</span></div></li>');
                functions.stb();
            }
        },
        Unmuted: function(e) {
            if (Dubtrack.room.users.getIfMod(Dubtrack.session.id) || Dubtrack.room.users.getIfManager(Dubtrack.session.id) || Dubtrack.room.users.getIfOwner(Dubtrack.session.id)) {
                var username = e.user.username;
                var muted = e.mutedUser.username;
                $('.chat-main').append('<li class="system"><div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div><div class="text"><span class="system-userunmute">@'+muted+' was unmuted by @'+username+'</span></div></li>');
                functions.stb();
            }
        },
        clearchat: function() {
            if (!options.clearchat) {
                options.clearchat = true;
                functions.on('.clearchat');
                functions.storage('clearchat','true');
                options.cc = true;
                functions.cc();
            } else {
                options.clearchat = false;
                functions.off('.clearchat');
                functions.storage('clearchat','false');
                options.cc = false;
            }
        },
        cc: function() {
            if (options.cc) {
                setInterval(function() {
                    $('.clearChatToggle').click();
                    setTimeout(function() {
                        $('.chat-main').append('<li class="chat-system-loading">Automatically by cms!</li>');
                    }, 1000);
                }, 1800000);
            }
        },
        cdel: function(e) {
            $(e).parent('li')[0].remove();
        },
        stb: function() {
            $('#new-messages-counter').click();
        },
        commands: function(e) {
            var message = e.message;
            var id = Dubtrack.session.id;
            var user = e.user.userInfo.userid;
            var mitch = '55ff8bf7196f170300cc0b2a';
            if (message.indexOf('/help') >-1 && id === user) {
                var help = [
                    '<li class="system">',
                        '<div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div>',
                            '<br>',
                        '<span>CMS HELP</span>',
                            '<br>',
                            '<br>',
                        '<span>Autovote - Automatically updubs songs</span>',
                            '<br>',
                        '<span>Auto Clear Chat - Automatically clears the chat every 30mins</span>',
                            '<br>',
                        '<span>Workmode - Hides video and chat</span>',
                            '<br>',
                        '<span>Chatmode - Hides video</span>',
                            '<br>',
                        '<span>Hide Deleted Messages - Hides messages that have been deleted</span>',
                            '<br>',
                        '<span>Community Theme - Enable the room\'s custom theme</span>',
                            '<br>',
                        '<span>Join Message - Displays user join notifications in chat</span>',
                            '<br>',
                        '<span>Leave Message - Displays user leave notifications in chat</span>',
                            '<br>',
                        '<span>Grab Message - Displays grab notifications in chat</span>',
                            '<br>',
                        '<span>Updub Message - Displays updub notifications in chat</span>',
                            '<br>',
                        '<span>Custom Background - Paste an image link for a custom background</span>',
                            '<br>',
                        '<span>Custom Css - Paste a .css link for a custom theme</span>',
                            '<br>',
                            '<br>',
                        '<span>/commands - Displays a list of CMS chat commands</span>',
                            '<br>',
                    '</li>'
                ].join('');
                $('.chat-main').append(help);
                functions.stb();
            }
            if (message.indexOf('/commands') >-1 && id === user) {
                var commands = [
                    '<li class="system">',
                        '<div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div>',
                            '<br>',
                        '<span>CMS COMMANDS</span>',
                            '<br>',
                            '<br>',
                        '<span>/help - Displays help message</span>',
                            '<br>',
                        '<span>/whois [username/userid] - Displays info about a user</span>',
                            '<br>',
                        '<span>/whoami - Displays your info</span>',
                            '<br>',
                    '</li>'
                ].join('');
                $('.chat-main').append(commands);
                functions.stb();
            }
            if (message.indexOf("/whois ") === 0 && id === user) {
                message.replace(/( [A-Za-z0-9_.]+)/g, function(str) {
                    var name = ''+str+'';
                    var username = name.substr(1);
                    functions.who(username);
                });
            }
            if (message.indexOf("/whoami") >-1 && id === user) {
                var username = Dubtrack.session.get('username');
                functions.who(username);
            }
            if (message.indexOf("/eta") >-1 && id === user) {
                var t = 4;
                var ct = parseInt($('#player-controller div.left ul li.infoContainer.display-block div.currentTime span.min').text());
                var bd = parseInt($('.queue-position').text());
                var bt = (bd * t - t) + ct;
                functions.eta(bt);
            }
        },
        etaclick: function() {
            $('.eta').click(function() {
                var t = 4;
                var ct = parseInt($('#player-controller div.left ul li.infoContainer.display-block div.currentTime span.min').text());
                var bd = parseInt($('.queue-position').text());
                var bt = (bd * t - t) + ct;
                functions.eta(bt);
            });
        },
        who: function(username) {
            $.ajax({
                type: 'GET',
                url: 'https://api.dubtrack.fm/user/'+username,
            }).done(function(r) {

                var i = r.data;

                var user = i.username;
                var uuid = i._id;
                var locale = i.userInfo.locale;
                var cr = ''+i.created+'';
                var created = cr.substr(0, cr.length-3); 
                var rrole = 'user';
                var grole = 'user';
                var dubs = Dubtrack.room.users.getDubs(''+uuid+'');

                var d = new Date(created * 1000),
                    yyyy = d.getFullYear(),
                    mm = ('0' + (d.getMonth() + 1)).slice(-2),
                    dd = ('0' + d.getDate()).slice(-2),
                    hh = d.getHours(),
                    h = hh,
                    ampm = 'AM',
                    min = ('0' + d.getMinutes()).slice(-2),
                    time;   
                if (hh > 12) {
                    h = hh - 12;
                    ampm = 'PM';
                } else if (hh === 12) {
                    h = 12;
                    ampm = 'PM';
                } else if (hh === 0) {
                    h = 12;
                }
                time = yyyy+'/'+mm+'/'+dd+' - '+hh+':'+min+ampm;

                if (Dubtrack.room.users.getIfOwner(''+uuid+'')) {
                    rrole = 'co-owner';
                } else if (Dubtrack.room.users.getIfManager(''+uuid+'')) {
                    rrole = 'manager';
                } else if (Dubtrack.room.users.getIfMod(''+uuid+'')) {
                    rrole = 'mod';
                } else if (Dubtrack.room.users.getIfVIP(''+uuid+'')) {
                    rrole = 'vip';
                } else if (Dubtrack.room.users.getIfResidentDJ(''+uuid+'')) {
                    rrole = 'rdj';
                }
                if (Dubtrack.helpers.isDubtrackAdmin(''+uuid+'')) {
                    grole = 'admin';
                }
                var whois = [
                    '<li class="system">',
                        '<div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div>',
                            '<br>',
                        '<span>WHO IS - '+user+'</span>',
                            '<br>',
                            '<br>',
                        '<span>GLOBAL INFO</span>',
                            '<br>',
                        '<span>Username: '+user+'</span>',
                            '<br>',
                        '<span>Uuid: '+uuid+'</span>',
                            '<br>',
                        '<span>Created: '+time+'</span>',
                            '<br>',
                        '<span>Locale: '+locale+'</span>',
                            '<br>',
                        '<span>Role: '+grole+'</span>',
                            '<br>',
                            '<br>',
                        '<span>ROOM INFO</span>',
                            '<br>',
                        '<span>Role: '+rrole+'</span>',
                            '<br>',
                        '<span>Dubs: '+dubs+'</span>',
                            '<br>',
                    '</li>'
                ].join('');
                $('.chat-main').append(whois);
                functions.stb();
            });
        },
        eta: function(e) {
            if (e >= 0) {
                $('.chat-main').append('<li class="system"><div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div><span>ETA: '+e+' Minutes</span></li>');
            } else {
                $('.chat-main').append('<li class="system"><div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div><span>ETA: You\'re not in the queue</span></li>');
            }
            functions.stb();
        },
        chatlog: function(e) {
            if (Dubtrack.session.get('username') === 'mitch') {
                var username = e.user.username;
                var userid = e.user.userInfo.userid;
                var msg = e.message;
                var c = ''+e.time+'';
                var cr = c.substr(0, c.length-3); 
                var d = new Date(cr * 1000),
                    yyyy = d.getFullYear(),
                    mm = ('0' + (d.getMonth() + 1)).slice(-2),
                    dd = ('0' + d.getDate()).slice(-2),
                    hh = d.getHours(),
                    h = hh,
                    ampm = 'AM',
                    min = ('0' + d.getMinutes()).slice(-2),
                    time;   
                if (hh > 12) {
                    h = hh - 12;
                    ampm = 'PM';
                } else if (hh === 12) {
                    h = 12;
                    ampm = 'PM';
                } else if (hh === 0) {
                    h = 12;
                }
                time = yyyy+'/'+mm+'/'+dd+' - '+hh+':'+min+ampm;
                console.info('%cNAME: '+username+' | ID: '+userid+' | TIME: '+time, 'font-weight: 600;'+'color: #aaaaac;');
                console.log('%cMESSAGE: "'+msg+'"', 'font-size: 1.1em;');
                console.log(' ');
            }
        },
        cmen: function() {
            if (!options.cmen) {
                $('.INPUT.CMEN').show();
                $('.INPUT.BG').hide();
                $('.INPUT.AFKMSG').hide();
                $('.INPUT.CSS').hide();
                $('.INPUT.AFK').hide();
                $('.CONFIRM.UNMUTE').hide();
                $('.CONFIRM.UNBAN').hide();
                options.cmen = true;
            } else {
                $('.INPUT.CMEN').hide();
                options.cmen = false;
            }
        },
        cmenc: function() {
            var text = $('.input.cmen').val();
            if (text !== null) {
                functions.storage('cmen',text);
                $('.INPUT.CMEN').hide();
            }
        },
        cmench: function(e) {
            var content = e.message.toLowerCase();
            var user = Dubtrack.session.id;
            var id = e.user.userInfo.userid;
            if (options.cmen) {
                if (options.cmentoggle && user !== id && localStorage.getItem('cmen')) {
                    var customMentions = localStorage.getItem('cmen').toLowerCase().split(',');
                    if(customMentions.some(function(f) { return content.indexOf(f.trim(' ')) >= 0; })) {
                        Dubtrack.room.chat.mentionChatSound.play();
                    }
                }
            }
        },
        afkmsg: function() {
            if (!options.afkmsg) {
                $('.INPUT.AFKMSG').show();
                $('.INPUT.CMEN').hide();
                $('.INPUT.BG').hide();
                $('.INPUT.CSS').hide();
                $('.CONFIRM.UNMUTE').hide();
                $('.CONFIRM.UNBAN').hide();
                options.afkmsg = true;
            } else {
                $('.INPUT.AFKMSG').hide();
                options.afkmsg = false;
            }
        },
        afkmsgc: function() {
            var text = $('.input.afk').val();
            if (text !== null) {
                functions.storage('afkmsg',text);
                $('.INPUT.AFKMSG').hide();
            }
        },
        afkch: function(e) {
            var message = e.message;
            var username = Dubtrack.session.get('username');
            var user = Dubtrack.session.id;
            var id = e.user.userInfo.userid;
            if (message.indexOf('@'+username) >-1 && user !== id) {
                if (options.afktoggle) {
                    if (!options.afkto) {
                        if (localStorage.getItem('afkmsg')) {
                            var msg = localStorage.getItem('afkmsg');
                            $('#chat-txt-message').val(msg);
                            setTimeout(function() {
                                options.afkto = true;
                                Dubtrack.room.chat.sendMessage();
                            }, 1000);
                        }
                        setTimeout(function() {
                            options.afkto = false;
                        }, 120000);
                    }
                }
            }
        },
        updatecmen: function() {
            var cmen = localStorage.getItem('cmen');
            if (cmen !== 'null') {
                $('.input.cmen').val(cmen);
            }
        },
        updateafkmsg: function() {
            var afk = localStorage.getItem('afkmsg');
            if (afk !== 'null') {
                $('.input.afk').val(afk);
            }
        },
        updatebg: function() {
            var bg = localStorage.getItem('bg');
            if (bg !== 'null') {
                $('.input.bg').val(bg);
                $('body').append('<div class="CMSbg" style="background: url('+bg+');"></div>');
            }
        },
        updatecss: function() {
            var css = localStorage.getItem('ccss');
            if (css !== 'null') {
                $('.input.css').val(css);
                $('head').append('<link class="CMSccss" href="'+css+'" rel="stylesheet" type="text/css">');
            }
        },
        afktoggle: function() {
            if (!options.afktoggle) {
                options.afktoggle = true;
                functions.storage('afktoggle','true');
                functions.on('.afktoggle');
            } else {
                options.afktoggle = false;
                functions.storage('afktoggle','false');
                functions.off('.afktoggle');
            }
        },
        cmentoggle: function() {
            if (!options.cmentoggle) {
                options.cmentoggle = true;
                functions.storage('cmentoggle','true');
                functions.on('.cmentoggle');
            } else {
                options.cmentoggle = false;
                functions.storage('cmentoggle','false');
                functions.off('.cmentoggle');
            }
        },
        newupdate: function(e) {
            var message = e.message;
            var user = e.user.userInfo.userid;
            var id = '55ff8bf7196f170300cc0b2a';
            console.log(user);
            if (message.indexOf("/nu") >-1 && id === user) {
                var msg = [
                    '<div id="toast-container" class="toast-top-right" style="display:none;" aria-live="polite" role="alert">',
                        '<div class="toast toast-error" style="display: block;">',
                            '<div class="toast-progress" style="width: 100%;"></div>',
                            '<button onclick="functions.nur();" type="button" class="toast-close-button" role="button">×</button>',
                            '<div class="toast-message">CMS Has Updated!<br>Please Refresh The Update.</div>',
                        '</div>',
                    '</div>'
                ].join(' ');
                var style = '<link class="toast-style" rel="stylesheet" type="text/css" href="https://mitchdev.net/cms/css/toast.css">';
                $('body').append(msg);
                $('.toast-top-right').fadeToggle('slow');
                $('head').append(style);
                functions.nup();
                Dubtrack.room.chat.mentionChatSound.play();
            }
        },
        nup: function() {
            setTimeout(function() {
                $('.toast-progress').hide("slide", { direction: "left" }, 10000);
                setTimeout(function() {
                    functions.nur();
                }, 9000);
            }, 1000);
        },
        nur: function() {
            $('.toast-top-right').fadeToggle('slow');
            setTimeout(function() {
                $('.toast-container').remove();
                $('.toast').remove();
                $('.toast-progress').remove();
                $('.toast-close-button').remove();
                $('.toast-message').remove();
                $('.toast-style').remove();
            }, 4000);
        }
    };

    functions.mainmenu();
    setTimeout(function() {
        if (Dubtrack.session.get('username') === 'mrsuffocate') {
            $('body').append('<div class="pizza" style="background: url(http://i.imgur.com/A0qhlG2.gif);"></div>');
        }
        if (localStorage.getItem('clearchat') === 'true') {
            functions.clearchat();
        }
        if (localStorage.getItem('afktoggle') === 'true') {
            functions.afktoggle();
        }
        if (localStorage.getItem('cmentoggle') === 'true') {
            functions.cmentoggle();
        }
        if (localStorage.getItem('userjoin') === 'true') {
            functions.userjoin();
        }
        if (localStorage.getItem('userleave') === 'true') {
            functions.userleave();
        }
        if (localStorage.getItem('userddub') === 'true') {
            functions.userddub();
        }
        if (localStorage.getItem('usergrab') === 'true') {
            functions.usergrab();
        }
        if (localStorage.getItem('userudub') === 'true') {
            functions.userudub();
        }
        if (localStorage.getItem('autovote') === 'true') {
            functions.autovote();
        }
        if (localStorage.getItem('css') === 'true') {
            functions.roomcss();
        }
        if (localStorage.getItem('delmsg') === 'true') {
            functions.deletemsg();
        }
        if (localStorage.getItem('cmen')) {
            functions.cmen();
        }
        if (localStorage.getItem('afkmsg')) {
            functions.afkmsg();
        }
        
        Dubtrack.Events.bind("realtime:chat-message", functions.newupdate);
        Dubtrack.Events.bind("realtime:chat-message", functions.afkch);
        Dubtrack.Events.bind("realtime:chat-message", functions.cmench);
        Dubtrack.Events.bind('realtime:chat-message', functions.chatlog);
        Dubtrack.Events.bind("realtime:chat-message", functions.commands);
        Dubtrack.Events.bind('realtime:user-mute', functions.Muted);
        Dubtrack.Events.bind('realtime:user-unmute', functions.Unmuted);
        Dubtrack.Events.bind("realtime:room_playlist-update", functions.updateupdublist);
        Dubtrack.Events.bind("realtime:room_playlist-update", functions.updatedowndublist);
        Dubtrack.Events.bind("realtime:room_playlist-update", functions.updategrablist);
        Dubtrack.Events.bind('realtime:room_playlist-dub', functions.updublist);
        Dubtrack.Events.bind('realtime:room_playlist-dub', functions.downdublist);
        Dubtrack.Events.bind('realtime:room_playlist-queue-update-grabs', functions.grablist);

        functions.etaclick();
        functions.hovertogglegrab();
        functions.hovertoggledowndub();
        functions.hovertoggleupdub();
        functions.updatecmen();
        functions.updatebg();
        functions.updateafkmsg();
        functions.updatecss();
    }, 6000);
} else {
    $('.chat-main').append('<li class="system" style="text-align: center;">Sorry '+Dubtrack.session.get('username')+',<br>CMS is already running.</li>');
}
