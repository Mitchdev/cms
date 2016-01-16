var run;
if (!run) {
    run = true;
    var motd = 'Commands?';
    var version = 'Version - 10.3';
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
        confirmunban: false,
        confirmunmute: false,
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
                            '<h1>Grab List</h1>',
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
                            '<h1>Updub List</h1>',
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
                            '<h1>Downdub List</h1>',
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
                '<li class="system">',
                    '<span>Welcome back '+Dubtrack.session.get('username')+'!</span>',
                        '<br>',
                    '<span>CMS '+version+'</span>',
                        '<br>',
                    '<span>'+motd+'</span>',
                '</li>'
            ].join('');
            var mainmenu = [
                '<link rel="stylesheet" type="text/css" href="https://mitchdev.net/CMS/css/main.css">',
                '<div class="main_content">',
                    '<div class="headerbox" onclick="functions.menufade();">',
                        '<span class="main_content_ver"><center>CMS</center></span>',
                        '<span class="main_content_version"><center>'+version+'<br>'+motd+'</center></span>',
                    '</div>',
                    '<ul class="main_content_ul">',
                        '<ul>',
                            '<li onclick="functions.autovote();" class="main_content_li main_content_feature autovote">',
                                '<p class="main_content_p">Autovote</p>',
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
                            '<li onclick="functions.bginput();" class="main_content_li main_content_feature backgroudme">',
                                '<p class="main_content_p">Custom Background</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Click Edit</span></p>',
                            '</li>',
                            '<div class="INPUT BG">',
                                '<li class="inbg">',
                                '</li>',
                                '<br>',
                            '</div>',
                            '<li onclick="functions.cssinput();" class="main_content_li main_content_feature mycss">',
                                '<p class="main_content_p">Custom CSS</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Click Edit</span></p>',
                            '</li>',
                            '<div class="INPUT CSS">',
                                '<li class="incss">',
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
                $(dtapi).insertAfter('#main-menu-left .navigate.room-active-link');
                $(ebtn).insertAfter('#main-menu-left .navigate.lobby-link');
                $(btn).insertAfter('.player_header .room-info-display');
                $('body').prepend(mainmenu);
                $('body').append(updubs);
                $('body').append(grabs);
                $('.INPUT').hide();
                setTimeout(function() {
                    if (Dubtrack.room.users.getIfMod(Dubtrack.session.id) || Dubtrack.room.users.getIfManager(Dubtrack.session.id) || Dubtrack.room.users.getIfOwner(Dubtrack.session.id)) {
                        $(downdubs).insertAfter('.updublist');
                    }
                }, 4000);
            }, 1000);
        },
        unmuteconfirm: function() {
            if (!options.confirmunmute) {
                $('.INPUT.CSS').hide();
                $('.INPUT.BG').hide();
                $('.INPUT.AFK').hide();
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
                $('.INPUT.CSS').hide();
                $('.INPUT.BG').hide();
                $('.INPUT.AFK').hide();
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
            var downdubhover = false;
            $('.dubdown').hover(function() {
                downdubhover = true;
                if (downdubhover) {
                    $('.downdublist').slideToggle("slow");
                }
            });
            $('.dubdown').mouseout(function() {
                downdubhover = false;
            });
        },
        downdublist: function(e) {
            var user = e.user.username;
            setTimeout(function() {
                if (e.dubtype === "downdub") {
                    $('.dd-user-'+user+'').remove();
                    $('.downdublistpeople').append('<p id="user-downdub" class="dd-user-'+user+'">@'+user+'</p>');
                }
            }, 1000);
        },
        updatedowndublist: function() {
            $('#user-downdub').remove();
        },
        hovertoggleupdub: function() {
            var updubhover = false;
            $('.dubup').hover(function() {
                updubhover = true;
                if (updubhover) {
                    $('.updublist').slideToggle("slow");
                }
            });
            $('.dubup').mouseout(function() {
                updubhover = false;
            });
        },
        updublist: function(e) {
            var user = e.user.username;
            setTimeout(function() {
                if (e.dubtype === "updub") {
                    $('.ud-user-'+user+'').remove();
                    $('.updublistpeople').append('<p id="user-updub" class="ud-user-'+user+'">@'+user+'</p>');
                }
            }, 1000);
        },
        updateupdublist: function() {
            $('#user-updub').remove();
        },
        hovertogglegrab: function() {
            var grabhover = false;
            $('.add-to-playlist-button').hover(function() {
                grabhover = true;
                if (grabhover) {
                    $('.grablist').slideToggle("slow");
                }
            });
            $('.add-to-playlist-button').mouseout(function() {
                grabhover = false;
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
            setInterval(function() {
                $('.deleted').hide();
                $('.deleted-message').hide();
            }, 5000);
        },
        cssloading: function() {
            if(localStorage.getItem('ccss') !==null) {
                var text = localStorage.getItem('ccss');
                $('head').append('<link class="CMSccss" href="'+text+'" rel="stylesheet" type="text/css">');
            }
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
                $('.INPUT.CSS').show();
                $('.INPUT.BG').hide();
                $('.INPUT.AFK').hide();
                $('.CONFIRM.UNMUTE').hide();
                $('.CONFIRM.UNBAN').hide();
                options.inputcss = true;
            } else {
                $('.INPUT.CSS').hide();
                options.inputcss = false;
            }
        },
        bgloading: function() {
            if(localStorage.getItem('bg') !==null) {
                var text = localStorage.getItem('bg');
                $('body').append('<div class="CMSbg" style="background: url('+text+');"></div>');
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
                $('.INPUT.BG').show();
                $('.INPUT.CSS').hide();
                $('.INPUT.AFK').hide();
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
            $('.chat-main').append('<li class="system"><div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div><div class="text"><span class="system-userjoin">@'+e.user.username+' joined the room</span></div></li>');
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
            $('.chat-main').append('<li class="system"><div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div><div class="text"><span class="system-userleave">@'+e.user.username+' left the room</span></div></li>');
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
            $('.chat-main').append('<li class="system"><div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div><div class="text"><span class="system-usergrab">@'+e.user.username+' grabed the song</span></div></li>');
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
                $('.chat-main').append('<li class="system"><div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div><div class="text"><span class="system-userudub">@'+e.user.username+' up dubed the song</span></div></li>');
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
        Muted: function(e) {
            if (Dubtrack.room.users.getIfMod(Dubtrack.session.id) || Dubtrack.room.users.getIfManager(Dubtrack.session.id) || Dubtrack.room.users.getIfOwner(Dubtrack.session.id)) {
                var username = e.user.username;
                var muted = e.mutedUser.username;
                $('.chat-main').append('<li class="system"><div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div><div class="text"><span class="system-userleave">@'+muted+' was muted by @'+username+'</span></div></li>');
            }
        },
        Unmuted: function(e) {
            if (Dubtrack.room.users.getIfMod(Dubtrack.session.id) || Dubtrack.room.users.getIfManager(Dubtrack.session.id) || Dubtrack.room.users.getIfOwner(Dubtrack.session.id)) {
                var username = e.user.username;
                var muted = e.mutedUser.username;
                $('.chat-main').append('<li class="system"><div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div><div class="text"><span class="system-userleave">@'+muted+' was unmuted by @'+username+'</span></div></li>');
            }
        },
        Euserddub: function(e) {
            if (Dubtrack.room.users.getIfMod(Dubtrack.session.id) || Dubtrack.room.users.getIfManager(Dubtrack.session.id) || Dubtrack.room.users.getIfOwner(Dubtrack.session.id)) {
                if (e.dubtype === "downdub") {
                    $('.chat-main').append('<li class="system"><div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div><div class="text"><span class="system-userddub">@'+e.user.username+' down dubed the song</span></div></li>');
                }
            }
        },
        cdel: function(e) {
            $(e).parent('li')[0].remove();
        },
        commands: function(e) {
            var message = e.message;
            var id = Dubtrack.session.id;
            var user = e.user.userInfo.userid;
            if (message.indexOf('/help') >-1 && id === user) {
                var help = [
                    '<li class="system">',
                        '<div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div>',
                            '<br>',
                        '<span>CMS HELP</span>',
                            '<br>',
                            '<br>',
                        '<span>No help is needed!</span>',
                            '<br>',
                    '</li>'
                ].join('');
                $('.chat-main').append(help);
            }
            if (message.indexOf('/commands') >-1 && id === user) {
                var commands = [
                    '<li class="system">',
                        '<div class="chatDelete" onclick="functions.cdel(this)"><span class="icon-close"></span></div>',
                            '<br>',
                        '<span>CMS COMMANDS</span>',
                            '<br>',
                            '<br>',
                        '<span>/help - Displayes Help Message</span>',
                            '<br>',
                        '<span>/whois [username, uuid] - Displays Info About User</span>',
                            '<br>',
                    '</li>'
                ].join('');
                $('.chat-main').append(commands);
            }
            if(message.indexOf("/whois ") === 0 && id === user) {
                message.replace(/( [A-Za-z0-9_.]+)/g, function(str) {
                    var name = ''+str+'';
                    var username = name.substr(1);
                    functions.who(username);
                });
            }
            if(message.indexOf("/whoami") >-1 && id === user) {
                var username = Dubtrack.session.get('username');
                functions.who(username);
            }
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
                var created = ''+i.created+''.substr(0, cr.length-3); 
                var rrole = 'user';
                var grole = 'user';
                var muted = 'false';
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
                time = yyyy+'-'+mm+'-'+dd+', '+hh+':'+min+' '+ampm;

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
                        //'<span>Role: '+grole+'</span>',
                        //    '<br>',
                            '<br>',
                        '<span>ROOM INFO</span>',
                            '<br>',
                        '<span>Role: '+rrole+'</span>',
                            '<br>',
                        '<span>Dubs: '+dubs+'</span>',
                            '<br>',
                        //'<span>Is Muted: '+muted+'</span>',
                        //    '<br>',
                    '</li>'
                ].join('');
                $('.chat-main').append(whois);
            });
        }
    };

    Dubtrack.Events.bind("realtime:chat-message", functions.commands);
    Dubtrack.Events.bind('realtime:user-mute', functions.Muted);
    Dubtrack.Events.bind('realtime:user-unmute', functions.Unmuted);
    Dubtrack.Events.bind("realtime:room_playlist-update", functions.updateupdublist);
    Dubtrack.Events.bind("realtime:room_playlist-update", functions.updatedowndublist);
    Dubtrack.Events.bind("realtime:room_playlist-update", functions.updategrablist);
    Dubtrack.Events.bind('realtime:room_playlist-dub', functions.updublist);
    Dubtrack.Events.bind('realtime:room_playlist-dub', functions.downdublist);
    Dubtrack.Events.bind('realtime:room_playlist-queue-update-grabs', functions.grablist);

    $('document').ready(functions.cssloading);
    $('document').ready(functions.bgloading);
    $('document').ready(functions.css);

    functions.deletemsg();
    functions.hovertogglegrab();
    functions.hovertoggledowndub();
    functions.hovertoggleupdub();
    functions.mainmenu();

    setTimeout(function() {
        if (Dubtrack.session.get('username') === 'mrsuffocate') {
            $('body').append('<div class="pizza" style="background: url(http://45.media.tumblr.com/04880a380a9777427066c84b197213fe/tumblr_nip4kjNx6T1tbq024o1_540.gif);"></div>');
        }
        if (localStorage.getItem('bg') !== null || localStorage.getItem('ccss') !== ' ') {
            var bg = localStorage.getItem('bg');
            $('.inbg').append('<textarea class="input bg" placeholder="'+bg+'"></textarea>','<center><span class="CMSconfirm" onclick="functions.bgconfirm();">Confirm</span></center>');
        } else {
            $('.inbg').append('<textarea class="input bg" placeholder="https://example.com/example.jpg"></textarea>','<center><span class="CMSconfirm" onclick="functions.bgconfirm();">Confirm</span></center>');
        }
        if (localStorage.getItem('ccss') !== null || localStorage.getItem('ccss') !== ' ') {
            var css = localStorage.getItem('ccss');
            $('.incss').append('<textarea class="input css" placeholder="'+css+'"></textarea>','<center><span class="CMSconfirm" onclick="functions.cssconfirm();">Confirm</span></center>');
        } else {
            $('.inbg').append('<textarea class="input bg" placeholder="https://example.com/example.css"></textarea>','<center><span class="CMSconfirm" onclick="functions.bgconfirm();">Confirm</span></center>');
        }
        if (localStorage.getItem('delmsg') === 'true') {
            functions.deletemsg();
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
        setTimeout(function() {
            $('.icon-camera').remove();
        }, 1500);
    }, 4000);
} else {
    $('.chat-main').append('<li class="system" style="text-align: center;">Sorry '+Dubtrack.session.get('username')+'!<br>CMS is already running.</li>');
}
