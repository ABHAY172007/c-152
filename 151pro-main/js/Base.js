AFRAME.registerComponent("base",{
    schema: {
        radius:{type:"number",default:150},
        hieght:{type:"number",default:3}
    },

    init:function(){
        this.el.setAttribute("geometry",{
            primitive:"cylinder",
            radius: this.data.radius,
            hieght: this.data.hieght
        });

        this.el.setAttribute(material,{color:"#1769aa"});
    }
});
