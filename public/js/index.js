$(function() {


    function getData() {
        var get = function() {
                // 获取products数据
                $.ajax({
                    url: "http://localhost:3000/data",
                    dataType: "jsonp",
                    success(d) {
                        console.log(d);
                        showData(d.data.list)
                        createPageBtn(d.data.totalPage)
                    },
                    data: sendData,
                })
            }
            // 发送到后台的数据
        var sendData = {
            txt: '',
            page: 1,
            pageSize: 10,
            // isdiscount: 'new',
            // tosort: 1

        }

        // 渲染页面
        function showData(arr) {


            $('.product_list').html($.map(arr, function(v, i) {
                console.log(v)
                var level = {
                    '1': 'S',
                    '2': 'A',
                    '3': 'B',
                    '4': 'C'
                }
                var quality_level = level[v.quality]
                return ` <li>
                <a class='product_list_pic' href="http://localhost:3000/product_info.html?id=${v.id}"><img src="${v.img}" alt="">
                    <div class="product_info">
                        <p class="product_name">${v.name}</p>
                        <p class="product_quality">Quality：${quality_level}</p>
                        <p class="product_size">Size：${v.size}</p>
                        <p class="product_price">${v.price}元</p>
                    </div>
                </a>
            </li>`
            }))

        }
        // 生成页码按钮

        function createPageBtn(n) {
            var str = '';
            for (let i = 0; i < n; i++) {
                if (sendData.page == i + 1) {
                    str += `<button class="page_btn active">${i+1}</button>`
                } else {
                    str += `<button class="page_btn">${i+1}</button>`
                }
            }
            $('.page').html(str)
        }

        //返回
        return {
            get,
            sendData
        }

    }

    var dataObj = getData()

    dataObj.get()




    // 导航条
    $('.head_nav_list').find('li').eq(0).addClass('active')
    $('.head_nav_list').find('li').click(function() {
        $(this).addClass('active').siblings().removeClass('active')
    })











    // 搜索按钮
    $('.search').click(function() {
        console.log($('#txt').val())

        dataObj.sendData.txt = $('#txt').val()
        dataObj.sendData.page = 1
        dataObj.get()

    })

    // 回车搜索
    $(document).keypress(function(e) {
        if (e.keyCode == 13) {

            dataObj.sendData.txt = $('#txt').val()
            dataObj.getData()
        }
    })

    // 失焦搜索
    $('#txt').blur(function() {

        dataObj.sendData.txt = $('#txt').val()
        dataObj.get()
    })





    // 页码换页





    $('.page').on('click', '.page_btn', function() {
        dataObj.sendData.page = $(this).text()
        dataObj.get()
    })



    //左边栏


    // 新品、全新、打折分类



    // 新品

    $('.isdiscount').find('div').eq(0).click(function() {


        $(this).addClass('active').siblings().removeClass('active')
        dataObj.sendData.page = 1
        dataObj.sendData.isdiscount = "new arrival"
        dataObj.get();

    })


    $('.isdiscount').find('div').eq(1).addClass('active')
        // 全新
    $('.isdiscount').find('div').eq(1).click(function() {


        $(this).addClass('active').siblings().removeClass('active')
        dataObj.sendData.page = 1
        dataObj.sendData.isdiscount = "new"
        dataObj.get()
    })



    // 折扣
    $('.isdiscount').find('div').eq(2).click(function() {


        $(this).addClass('active').siblings().removeClass('active')
        dataObj.sendData.page = 1
        dataObj.sendData.isdiscount = "discount",
            dataObj.get()
    })







    // 品牌分类


    $('.brand_list').find('li').eq(0).click(function() {
        $('.product_list').html(``)

        dataObj.sendData.page = 1
        dataObj.sendData.attr = 1
        dataObj.get()
    })
    $('.brand_list').find('li').eq(1).click(function() {
        $('.product_list').html(``)
        dataObj.sendData.page = 1
        dataObj.sendData.attr = 2
        dataObj.get()
    })
    $('.brand_list').find('li').eq(2).click(function() {
        $('.product_list').html(``)
        console.log('123456')
        dataObj.sendData.attr = 3
        dataObj.get()
    })








    // 功能分类

    // 上装

    $('.function_list').find('li').eq(0).click(function() {
            $('.product_list').html(``)
            dataObj.sendData.page = 1
            dataObj.sendData.style = 'up',
                dataObj.get()

        })
        // 下装

    $('.function_list').find('li').eq(1).click(function() {
            $('.product_list').html(``)
            dataObj.sendData.page = 1
            dataObj.sendData.style = 'bottom'
            dataObj.get()
        })
        // 鞋
    $('.function_list').find('li').eq(2).click(function() {
            $('.product_list').html(``)
            dataObj.sendData.page = 1
            dataObj.sendData.style = 'shoes'

            dataObj.get()

        })
        // 包
    $('.function_list').find('li').eq(3).click(function() {
        $('.product_list').html(``)
        dataObj.sendData.page = 1
        dataObj.sendData.style = 'bag'

        dataObj.get()
    })

    // 装饰

    $('.function_list').find('li').eq(4).click(function() {
        $('.product_list').html(``)
        dataObj.sendData.page = 1
        dataObj.sendData.style = 'scarf'

        dataObj.get()
    })






    // 价格排序



    $('.sort_up').addClass('active')

    $('.sort_up').click(function() {

        $(this).toggleClass('active')
        $('.sort_down').removeClass('active')
        if (dataObj.sendData.tosort === 1) {
            delete dataObj.sendData.tosort
        } else {
            dataObj.sendData.tosort = 1
        }

        dataObj.sendData.page = 1
        dataObj.get()
    })

    $('.sort_down').click(function() {
        $(this).toggleClass('active')
        $('.sort_up').removeClass('active')
        if (dataObj.sendData.tosort === -1) {
            delete dataObj.sendData.tosort
        } else {
            dataObj.sendData.tosort = -1
        }

        dataObj.sendData.page = 1
        dataObj.get()
    })









})