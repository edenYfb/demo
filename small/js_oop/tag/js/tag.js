function Tag(id){
    this.id=id;
    this.data;
    this.init();
}
Tag.prototype={
    constructor:Tag
    ,init:function(){
        this.dom();
        this.bindEvents();
    }
    ,dom:function(){
        this.container=document.createElement('div');
        this.container.className='tagContainer';
        this.dom1();
        this.dom2();
        this.id.appendChild(this.container);
        document.body.appendChild(this.id);
    }
    //DOM标题切换
    ,dom1:function(){
        var div=document.createElement('div');
        var titleDl=document.createElement('dl');
        for(var i=0,dd;i<3;i++){
            dd=document.createElement('dd');
            dd.index=i;
            titleDl.appendChild(dd);
        }
        titleDl.children[0].textContent='体育';
        titleDl.children[1].textContent='股票';
        titleDl.children[2].textContent='娱乐';
        div.className='tagDom1';
        titleDl.className='tagTitle';
        titleDl.children[0].className='active';
        this.titleDl=titleDl;
        div.appendChild(titleDl)
        this.container.appendChild(div);
    }
    //DOM内容切换
    ,dom2:function(){
        var div=document.createElement('div');
        div.className='tagDom2';
        //图片块
        var imgBox=document.createElement('span');
        var imgPic=document.createElement('img');
        var imgPicA=document.createElement('a');
        var imgTitle=document.createElement('a');
        imgPic.src='#',imgTitle.src='#';
        imgPicA.appendChild(imgPic),imgBox.appendChild(imgPicA),imgBox.appendChild(imgTitle);
        imgBox.className='TagImg',imgPic.className='TagImg_pic',imgTitle.className='TagImg_title';
        this.imgBox=imgBox,this.imgPicA=imgPicA,this.imgPic=imgPic,this.imgTitle=imgTitle;
        //新闻块
        var dl=document.createElement('dl');
        for(var i=0,dd;i<8;i++){
            dd=document.createElement('dd');
            dl.appendChild(dd);
        }
        dl.className='TagDl';
        this.newsDl=dl;
        this.newsDiv=div;
        this.container.appendChild(div);
        div.appendChild(imgBox);
        div.appendChild(dl);
    }
    ,bindEvents:function(){
        var objSelf=this;
        this.titleDl.onmouseover=function(event){
            var e=event||window.event;
            var target=e.target;
            //修改样式
            if(target.classList.contains('active'))return;
            target.parentNode.querySelector('.active').classList.remove('active');
            target.classList.add('active');
            //修改内容
            objSelf.container.removeChild(objSelf.container.children[1]);
            objSelf.dom2();
            objSelf.read(objSelf.data,target.index);
        }
    }
    //read
    ,read:function(data,index){
        if(typeof this.data==='undefined')this.data=data;
        if(typeof index==='undefined')index=0;
        var news=data[index];
        for(var i=0,a;i<news.length;i++){
            //图片
            if(news[i].src!=''){
                this.imgTitle.textContent=news[i].title;
                this.imgTitle.href=news[i].href;
                this.imgPic.src=news[i].src;
                this.imgPicA.href=news[i].href;
                continue;
            }
            //新闻列表
            a=document.createElement('a');
            a.textContent=news[i].title;
            a.href=news[i].src;
            this.newsDl.children[news[i].line].appendChild(a);
        }
    }
}
