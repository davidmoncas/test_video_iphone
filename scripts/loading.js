var loading = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function loading() {

        Phaser.Scene.call(this, {
            key: 'loading',
            active: true
        });
    },

    preload: function () { 

        // loading text
        this.loadingText = this.add.text(444, 260, "Loading video... ", {
            fontSize: 50
        }).setOrigin(0.5)

        
        this.load.video('background_intro_1', './assets/videos/start screen background.mp4');


        this.load.on('complete', () => {
            this.scene.start("intro_1");
        })


    },

    create: function () {


    },


    update: function () {
        // document.getElementById('prompt').innerHTML = "update";

    }

})
