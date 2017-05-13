/**
 * Created by asus on 2017/3/23.
 */
$(function () {
    //人
    $(".ul-menu>.lis1").on("mouseenter", function () {
        $(".lis1>.renbg").stop().fadeIn(300);
        $(".lis1>a>.sp1").hide().next().slideDown(function () {
            $(".lis1>a>.sp1").hide().next().animate({
                "bottom": 285
            }, 200)
        })
    })
    $(".ul-menu>.lis1").mouseleave(function () {
        $(".lis1>.renbg").stop().fadeOut(300);
        $(".lis1>a>.sp1").show().next().hide();
    })
    $(".ul-menu>.lis1").on("click", function () {
        $(".renbox").show();
        $(".mobox").hide();
        $(".xianbox").hide();
        $(".guibox").hide();
        $(this).animate({
            "width": "100%"
        }, 1000).siblings()
        $(".sp1").hide();
        $(".sp2").hide();

        setTimeout(function () {
            $(".lis1").find(".pic1").parent().animate({
                "margin-left": "900px"

            }, 1500)
        })
        $(".zhongr").animate({
            "padding-left": "0px"
        });
        $(".zhongzul").hide();

        $(".innerone").stop().animate({
            "z-index": "11"
        }).delay(1000).hide(-10);
        $(".innertow").animate({
            "z-index": "44"
        }).show(100);
        $(".nav").delay(2000).fadeIn(300);
        $(".zhongzul2").delay(2000).fadeIn();


    });

    //魔
    $(".ul-menu>.lis2").mouseenter(function () {
        $(".lis2>.renbg").stop().fadeIn(300);
        $(".lis2>a>.sp1").hide().next().slideDown(function () {
            $(".lis2>a>.sp1").hide().next().animate({
                "bottom": 285
            }, 200)
        })
    });
    $(".ul-menu>.lis2").mouseleave(function () {
        $(".lis2>.renbg").stop().fadeOut(300);
        $(".lis2>a>.sp1").show().next().hide();

    });
    $(".ul-menu>.lis2").on("click", function () {
        $(".renbox").hide();
        $(".mobox").show();
        $(".xianbox").hide();
        $(".guibox").hide();

        $(this).animate({
            "width": "100%"
        }, 1000).siblings().animate({
            "width": "0%"
        }, 1000)
        $(".sp1").hide();
        $(".sp2").hide();

        setTimeout(function () {
            $(".lis2").find(".pic1").parent().animate({
                "margin-left": "900px"

            }, 1500)
        })
        $(".zhongr").animate({
            "padding-left": "0px"
        });
        $(".zhongzul").hide();

        $(".innerone").stop().animate({
            "z-index": "11"
        }).delay(1000).hide(-10);
        $(".innertow").animate({
            "z-index": "44"
        }).show(100);
        $(".nav").delay(2000).fadeIn(300);
        $(".zhongzul2").delay(2000).fadeIn();


    });

    //仙
    $(".ul-menu>.lis3").mouseenter(function () {
        $(".lis3>.renbg").stop().fadeIn(300);
        $(".lis3>a>.sp1").hide().next().slideDown(function () {
            $(".lis3>a>.sp1").hide().next().animate({
                "bottom": 285
            }, 200)
        })
    });
    $(".ul-menu>.lis3").mouseleave(function () {
        $(".lis3>.renbg").stop().fadeOut(300);
        $(".lis3>a>.sp1").show().next().hide();

    });
    $(".ul-menu>.lis3").on("click", function () {
        $(".renbox").hide();
        $(".mobox").hide();
        $(".xianbox").show();
        $(".guibox").hide();

        $(this).animate({
            "width": "100%"
        }, 1000).siblings().animate({
            "width": "0%"
        }, 1000)
        $(".sp1").hide();
        $(".sp2").hide();

        setTimeout(function () {
            $(".lis3").find(".pic1").parent().animate({
                "margin-left": "900px"

            }, 1000)
        })
        $(".zhongr").animate({
            "padding-left": "0px"
        });
        $(".zhongzul").hide();

        $(".innerone").stop().animate({
            "z-index": "11"
        }).delay(1000).hide(-10);
        $(".innertow").animate({
            "z-index": "44"
        }).show(100);
        $(".nav").delay(2000).fadeIn(300);
        $(".zhongzul2").delay(2000).fadeIn();


    });

    //鬼
    $(".ul-menu>.lis4").mouseenter(function () {
        $(".lis4>.renbg").stop().fadeIn(300);
        $(".lis4>a>.sp1").hide().next().slideDown(function () {
            $(".lis4>a>.sp1").hide().next().animate({
                "bottom": 285
            }, 200)
        })
    });
    $(".ul-menu>.lis4").mouseleave(function () {
        $(".lis4>.renbg").stop().fadeOut(300);
        $(".lis4>a>.sp1").show().next().hide();

    });
    $(".ul-menu>.lis4").on("click", function () {
        $(".renbox").hide();
        $(".mobox").hide();
        $(".xianbox").hide();
        $(".guibox").show();

        $(this).animate({
            "width": "100%"
        }, 1000).siblings().animate({
            "width": "0%"
        }, 1000)
        $(".sp1").hide();
        $(".sp2").hide();

        setTimeout(function () {
            $(".lis4").find(".pic1").parent().animate({
                "margin-left": "1000px"

            }, 1000)
        })
        $(".zhongr").animate({
            "padding-left": "0px"
        });
        $(".zhongzul").hide();

        $(".innerone").stop().animate({
            "z-index": "11"
        }).delay(1000).hide(-10);
        $(".innertow").animate({
            "z-index": "22"
        }).show(100);
        $(".nav").delay(2000).fadeIn(300);
        $(".zhongzul2").delay(2000).fadeIn();


    });

    //人物切换
    var $rennav = $(".ren-nav");
    var $rennavlis = $rennav.find("li");
    var $monav = $(".mo-nav");
    var $monavlis = $monav.find("li");
    var $xiannav = $(".xian-nav");
    var $xiannavlis = $xiannav.find("li");
    var $guinav = $(".gui-nav");
    var $guinavlis = $guinav.find("li");

    var renwubox = function ($rennav, $rennavlis) {
        $rennavlis.eq(0).on("click", function () {
            $(".xiaoyao").show();
            $(".xiaoyao1").hide();
            $(".xiaoyao2").hide();
            $(".xiaoyao3").hide();
            $(".jiaosepic").stop().animate({
                marginLeft: '500'
            }, 300, "linear", function () {
                $(".jiaosepic").stop().animate({
                    marginLeft: '0'

                })
            })

        });
        $rennavlis.eq(1).on("click", function () {
            $(".xiaoyao").hide();
            $(".xiaoyao1").show();
            $(".xiaoyao2").hide();
            $(".xiaoyao3").hide();

            $(".jiaosepic").stop().animate({
                marginLeft: '500'
            }, 300, "linear", function () {
                $(".jiaosepic").stop().animate({
                    marginLeft: '0'

                })
            })

        });
        $rennavlis.eq(2).on("click", function () {
            $(".xiaoyao").hide();
            $(".xiaoyao1").hide();
            $(".xiaoyao2").show();
            $(".xiaoyao3").hide();

            $(".jiaosepic").stop().animate({
                marginLeft: '500'
            }, 300, "linear", function () {
                $(".jiaosepic").stop().animate({
                    marginLeft: '0'

                })
            })

        });
        $rennavlis.eq(3).on("click", function () {
            $(".xiaoyao").hide();
            $(".xiaoyao1").hide();
            $(".xiaoyao2").hide();
            $(".xiaoyao3").show();

            $(".jiaosepic").stop().animate({
                marginLeft: '500'
            }, 300, "linear", function () {
                $(".jiaosepic").stop().animate({
                    marginLeft: '0'

                })
            })

        });
        $rennavlis.eq(0).on("mouseenter", function () {
            $(this).removeClass("lis1").addClass("lis12");
        });
        $rennavlis.eq(0).on("mouseleave", function () {
            $(this).removeClass("lis12").addClass("lis1");
        });
        $rennavlis.eq(1).on("mouseenter", function () {
            $(this).removeClass("lis2").addClass("lis22");
        });
        $rennavlis.eq(1).on("mouseleave", function () {
            $(this).removeClass("lis22").addClass("lis2");
        });
        $rennavlis.eq(2).on("mouseenter", function () {
            $(this).removeClass("lis3").addClass("lis33");
        });
        $rennavlis.eq(2).on("mouseleave", function () {
            $(this).removeClass("lis33").addClass("lis3");
        });
        $rennavlis.eq(3).on("mouseenter", function () {
            $(this).removeClass("lis4").addClass("lis44");
        });
        $rennavlis.eq(3).on("mouseleave", function () {
            $(this).removeClass("lis44").addClass("lis4");
        });
    }
    renwubox($rennav, $rennavlis);
    renwubox($rennav, $monavlis);
    renwubox($xiannav, $xiannavlis);
    renwubox($guinav, $guinavlis);

    //导航切换
    //var $pagebox = $("pagebox");
    //var $ren = $pagebox.find(".renbox")
    //var $mo = $pagebox.find(".mobox")
    //var $xian = $pagebox.find(".xianbox")
    //var $gui = $pagebox.find(".guibox")

    $(".home").on("click", function () {
        $(".innertow").stop().animate({
            "z-index": "11"
        }).hide();
        $(".nav").hide();
        $(".zhongzul2").hide();
        $(".ul-menu>li").css({
            width:"24.97%"
        })
        $(".sp1").show();
        $(".sp2").show();
        $(".innerone").stop().animate({
            "z-index": "22"
        }).fadeIn(1000);
        $(".zhongzul").fadeIn(1200);
        $(".zhongr").animate({
            "padding-left": "260px"
        });
        $(".ul-menu>li>a").css({
            "margin-left": "0"
        })




    })
    $(".tnav1").on("click", function () {
        $(".renbox").stop().fadeIn(1000)
        $(".mobox").stop().fadeOut(1000)
        $(".xianbox").stop().fadeOut(1000)
        $(".guibox").stop().fadeOut(1000)

    })
    $(".tnav2").on("click", function () {
        $(".renbox").stop().fadeOut(1000)
        $(".mobox").stop().fadeIn(1000)
        $(".xianbox").stop().fadeOut(1000)
        $(".guibox").stop().fadeOut(1000)
    })
    $(".tnav3").on("click", function () {
        $(".renbox").stop().fadeOut(1000)
        $(".mobox").stop().fadeOut(1000)
        $(".xianbox").stop().fadeIn(1000)
        $(".guibox").stop().fadeOut(1000)
    })
    $(".tnav4").on("click", function () {
        $(".renbox").stop().fadeOut(1000)
        $(".mobox").stop().fadeOut(1000)
        $(".xianbox").stop().fadeOut(1000)
        $(".guibox").stop().fadeIn(1000)
    })

    $(".pic").mouseenter(function () {
        $(this).siblings().fadeIn(500);
    })
    $(".pic").mouseleave(function () {
        $(".con").hide()
    })
})
