class TelaInicial extends Phaser.Scene {
    constructor() {
        super({
            key: 'TelaInicial'
        });
    }

    preload() {
        // Carrega os recursos dos assets
        this.load.image('tela', 'assets/tela_inicial.avif');
        this.load.image('play', 'assets/Play.png');
    }

    create() {

        // Cria a imagem de fundo
        this.add.image(400, 300, 'tela').setScale(1.7);

        //botão "play"
        var play = this.add.image(400, 300, 'play').setScale(0.7);

        play.setInteractive();
        play.on('pointerdown', () => {
            // Iniciar a cena1 clicando no botão "play"
            this.scene.start('mainScene');
        });

        // Na primeira linha aumenta o tamanho quando o cursor está sobre a imagem e na segunda ele volta ao tamanho normal
        play.on('pointerover', () => {
            play.setScale(0.8);
        });

        play.on('pointerout', () => {
            play.setScale(0.7);
        });

    }
}
