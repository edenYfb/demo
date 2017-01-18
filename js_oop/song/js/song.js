function Songs(){
    this.init();
}
//初始化
Songs.prototype.init=function(){
    this.dom();
    this.bindEvent();
}
//创建dom结构
Songs.prototype.dom=function(){
    this.container=document.createElement('div');
    this.container.className='song_container';
    this.domInput();
    this.domShow();
    document.body.appendChild(this.container);
}
//dom载入歌曲
Songs.prototype.domInput=function(){
    var dom1=document.createElement('div');
    var span_song=document.createElement('span');
    var span_singer=document.createElement('span');
    var input_song=document.createElement('input');
    var input_singer=document.createElement('input');
    var btn_add=document.createElement('button');
    var btn_del=document.createElement('button');
    dom1.appendChild(span_song),dom1.appendChild(input_song),dom1.appendChild(span_singer),dom1.appendChild(input_singer),dom1.appendChild(btn_add);
    span_song.textContent='歌曲:';
    span_singer.textContent='歌手:';
    btn_add.textContent='添加';
    //css
    dom1.className='song_inputs';
    //事件相关dom
    this.input_song=input_song;
    this.input_singer=input_singer;
    this.btn_add=btn_add;
    this.btn_del=btn_del;
    //加入container
    this.container.appendChild(dom1);
}
//dom歌曲信息
Songs.prototype.domShow=function(){
    //标题
    var dl_title=document.createElement('dl');
    var dd_song=document.createElement('dd');
    var dd_singer=document.createElement('dd');
    var dd_operate=document.createElement('dd');
    dl_title.appendChild(dd_song),dl_title.appendChild(dd_singer),dl_title.appendChild(dd_operate);
    dd_song.textContent='歌曲';
    dd_singer.textContent='歌手';
    dd_operate.textContent='操作';
    //添加的数据
    var dl_datas=document.createElement('div');
    //css
    dl_title.className='song_showTitle';
    dl_datas.className='song_showDatas';
    //事件相关
    this.dl_datas=dl_datas;
    this.dl_title=dl_title;
    //加入container
    this.container.appendChild(dl_title);
    this.container.appendChild(dl_datas);
}
//绑定事件
Songs.prototype.bindEvent=function(){
    var sNew=this;
    this.btn_add.onclick=function(){
        var dl_line=sNew.dl_title.cloneNode(true);
        dl_line.children[0].textContent=sNew.input_song.value;
        dl_line.children[1].textContent=sNew.input_singer.value;
        dl_line.children[2].innerHTML="<a>删除</a>";
        //加入container
        sNew.dl_datas.appendChild(dl_line)
        sNew.container.appendChild(sNew.dl_datas);
        //清空input
        sNew.input_song.value='';
        sNew.input_singer.value='';
    }
    this.dl_datas.onclick=function(event){
        var e=event||window.event;
        var dl,datas;
        if(e.target.innerHTML==='删除'){
            dl=e.target.parentNode.parentNode;
            sNew.dl_datas.removeChild(dl);
        }
    }
}
//预读取
Songs.prototype.read=function(data){
    var read_line;
    for(var i=0;i<datas.length;i++){
        read_line=this.dl_title.cloneNode(true);
        read_line.children[0].textContent=datas[i].songName;
        read_line.children[1].textContent=datas[i].singer;
        read_line.children[2].innerHTML="<a>删除</a>";
        this.dl_datas.appendChild(read_line);
    }
}
