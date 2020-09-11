var intro_1 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function intro_1() {

        Phaser.Scene.call(this, {
            key: 'intro_1',
            active: false
        });
    },

    preload: function () {  },

    create: function () {
        
        this.background_video = this.add.video(444, 260, 'background_intro_1').setLoop(true);
        this.background_video.play();

        this.loadingText = this.add.text(444, 260, "video loaded successfully ", {
            fontSize: 50
        }).setOrigin(0.5)

    },

    update: function () {}
})