function query (text){
    $.ajax({
        type: 'get',
        url: 'http://172.16.8.36:8888/regex/query?name=' +text,
        dataType: 'json',
        success: function(data){
            var data = data.data.regs;
            var joinStr = template('temp', {arr: data} );
            $('#bodyId').html(joinStr);

        },
        error: function(data){
            console.log(data.status);

        },

    });
};

function create (){
    $.ajax({
        type: 'post',
        url: 'http://172.16.8.36:8888/regex/query?name=' +text,
        data: 'json',
        success: function(data){
            var data = data.data.regs;
            var joinStr = template('temp', {arr: data} );
            $('#bodyId').html(joinStr);

        },
        error: function(data){
            console.log(data.status);

        },

    });
};

function update (){

};





// 查询
$('.opera-lis li').each(function (index, item){
    var _item = $(item);
    _item.click(function (){
        $('.opera-lis li').each(function (i, v){ $(v).removeClass('highlight-effect') })
        $(this).addClass('highlight-effect')
        var txt = _item.text();
        query(txt)
    })
})

// 增加
$('#create').click(function (){
    var html =
    '<tr>'+
    '<td>'+
    '<div class="input-group">'+
    '<input type="text" class="input-group-form" value="">'+
    '</div>'+
    '</td>'+
    '<td>'+
    '<div class="input-group">'+
    '<input type="text" class="input-group-form" value="">'+
    '</div>'+
    '</td>'+
    '<td>'+
    '<div class="btn btn-theme">按钮</div>'+
    '</td>'+
    '</tr>';


    $('#bodyId').append(html).find('tr:last-child td:first-child input').focus();
})



// 修改
$('#bodyId').on('dblclick', '.regular, .doc-type', function (){
    var txt = $(this).text();
    var html = '<div class="input-group"><input type="text" class="input-group-form" value="'+ txt +'"></div>';
    $(this).text('').after(html).siblings('.input-group').children('input').focus();
})

// blur 事件
$('#bodyId').on('blur', 'input', function (){
    var val = $(this).val();
    $(this).parent('.input-group').siblings('span').text(val)
    $(this).parent('.input-group').remove();

})

// Enter 事件
$('#bodyId').on('keyup', 'input', function (){
    if(event.keyCode ==13){
        $(this).blur()
    }
})

//

