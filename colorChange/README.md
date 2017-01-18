#useage  

html:  

  need id and background-color(start)  
  
    ```<div id="box0" style="width:200px;height:200px;background-color:#B0C4DE;">fast</div>
    <div id="box1" style="width:200px;height:200px;background-color:#8B008B;">slow</div>```  
    
script:  

  cc.ready(id, background-color(end), during time)  
  
    ```cc.ready(box0,'#000',20);
    cc.ready(box1,'#191970',100);```
