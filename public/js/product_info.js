$(function() {


    var ID = location.search.split('=')[1]

    function showData(d) {



        $('.introduce').prepend(`<p class="intro_title">${d.name}</p>
    <p class="intro_size">Size：${d.size}</p>
    <p class="intro_quality">Quality：${d.quality}</p>
    <p class="intro_annex">Annex：</p>
    <p class="intro_price">Price：<span>￥${d.price}</span></p>`

        )



    }


    // 发送到后台的数据
    var sendData = {
        // txt: '',
        page: 1,
        pageSize: 15,
        // isdiscount: 'new',
        // tosort: 1
        id: ID
    }



    function getData() {


        // 获取products数据
        $.ajax({
            url: "http://localhost:3000/item",
            dataType: "jsonp",
            success(d) {
                console.log(d.data[0]);
                showData(d.data[0])
                ProductInfo(d.data[0])
                showPic(d.data[0])
                if (d.code === 10002) {
                    $('.err').show();
                    $('.product').hide()
                } else {
                    $('.err').hide()
                    $('.product').show()
                }


            },
            data: sendData,
        })
    }

    getData()






    // 导航条
    $('.head_nav_list').find('li').eq(4).addClass('active')
    $('.head_nav_list').find('li').click(function() {
        $(this).addClass('active').siblings().removeClass('active')
    })



    // 无法找到图片











    //显示产品照片

    function showPic(d) {


        $('.show').prepend(`<div class="bigpic">
                <img src="${d.img}" alt="">
    
    </div>
    <div class="smallpic"> <span><img src="${d.img}" alt=""></span>
        <span><img src="${d.img}" alt=""></span>
        <span><img src="${d.img}" alt=""></span>
        <span><img src="${d.img}" alt=""></span></div>`

        )
    }







    //商品详情

    function ProductInfo(d) {
        // let ID = location.search.split('=')[1]
        // console.log(ID)
        $('.product_info').append(
            `<p>Brand：${d.brand}</p>
                <p>Brand Attr：${d.attr}</p>
                <p>Type：${d.type}</p>
                <p>Subtype:${d.subtype}</p>
                <p>Name:${d.name}</p>
                <p>Size:${d.size}</p>
                <p>Quality:${d.quality}</p>
                <p>Price:${d.prize}</p>
                <p>Annex:${d.annex}</p>
                <p>Fit:${d.fit}</p>
                <p>PublishDate:${d.publishdate}</p>
                <p>Discount:${d.isdiscount}</p>   
    `
        )
    }











    //左边栏


    // 新品、全新、打折分类




    // 新品

    $('.isdiscount').find('div').eq(0).click(function() {
        console.log('lalalal')
            // $('.product_list').html(``)
        $(this).addClass('active').siblings().removeClass('active')
        sendData.isdiscount = "new arrival"
        getData({})
    })


    $('.isdiscount').find('div').eq(1).addClass('active')
        // 全新
    $('.isdiscount').find('div').eq(1).click(function() {
        console.log('lalalal')
            // $('.product_list').html(``)
        $(this).addClass('active').siblings().removeClass('active')
        sendData.isdiscount = "new"
        getData({})
    })



    // 折扣
    $('.isdiscount').find('div').eq(2).click(function() {
        console.log('lalalal')
        $('.product_list').html(``)
        $(this).addClass('active').siblings().removeClass('active')
        sendData.isdiscount = "discount",
            getData({})
    })







    // 品牌分类






    $('.brand_list').find('li').eq(0).click(function() {
        $('.product_list').html(``)
        console.log('123456')
        sendData.attr = 1
        getData({})
    });
    $('.brand_list').find('li').eq(1).click(function() {
        $('.product_list').html(``)
        console.log('123456')
        sendData.attr = 2
        getData({})
    });
    $('.brand_list').find('li').eq(2).click(function() {
        $('.product_list').html(``)
        console.log('123456')
        sendData.attr = 3
        getData({})
    })








    // 功能分类


    // 上装

    $('.function_list').find('li').eq(0).click(function() {
            $('.product_list').html(``)
            console.log('123456')
            sendData.style = 'up',
                getData({})

        })
        // 下装

    $('.function_list').find('li').eq(1).click(function() {
            $('.product_list').html(``)
            console.log('123456')
            sendData.style = 'bottom'
            getData({})
        })
        // 鞋
    $('.function_list').find('li').eq(2).click(function() {
            $('.product_list').html(``)
            console.log('123456')
            sendData.style = 'shoes'

            getData({})

        })
        // 包
    $('.function_list').find('li').eq(3).click(function() {
        $('.product_list').html(``)
        console.log('123456')
        sendData.style = 'bag'

        getData({})
    })

    // 装饰

    $('.function_list').find('li').eq(4).click(function() {
        $('.product_list').html(``)
        console.log('123456')
        sendData.style = 'scarf'

        getData({})
    })






})