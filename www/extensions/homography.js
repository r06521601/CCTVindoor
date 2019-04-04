function homo_trans(x, y){


    trans_x = (x*0.06062719+y*0+1*12.91010094)/(x*0+y*0+1*1)
    trans_y = (x*0+y*-0.05906482+1*16.328125)/(x*0+y*0+1*1)

    var result = {x:trans_x,y:trans_y};

    return result;


}