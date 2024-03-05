//Início da classe MainScene
class MainScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'mainScene'
        });
    }

    //Carrega as imagens do jogo
    preload() {
        this.load.image('parque', 'assets/parque.avif');
        this.load.image('grama', 'assets/plataforma.webp');
        this.load.image('moeda', 'assets/coin.png'); // Carrega imagem da moeda
        this.load.spritesheet('lily', 'assets/lily.png', { frameWidth: 32, frameHeight: 48 });
    }
    
    create() {
        //declara as variáveis
        var moeda;
        var moeda2;
        var moeda3;
        var moeda4;
        var placar;
        var pontuacao = 0
        //cria a imagem de fundo
        this.add.image(0, 0, 'parque').setOrigin(0).setScale(2.0);
        
        
        // Adiciona as plataformas
        var grama1 = this.physics.add.image(500, 450, 'grama').setImmovable().setScale(0.2);
        var grama2 = this.physics.add.image(500, 150, 'grama').setImmovable().setScale(0.3);
        var grama3 = this.physics.add.image(200, 250, 'grama').setImmovable().setScale(0.2);
        var grama4 = this.physics.add.image(100, 550, 'grama').setImmovable().setScale(0.2);
        var grama5 = this.physics.add.image(700, 320, 'grama').setImmovable().setScale(0.3);

        //retira a gravidade das plataformas
        grama1.body.allowGravity = false;
        grama2.body.allowGravity = false;
        grama3.body.allowGravity = false;
        grama4.body.allowGravity = false;
        grama5.body.allowGravity = false;

        //define as físicas e configurações de Lily, a persogaem principal
        lily = this.physics.add.sprite(100, 450, 'lily').setScale(2.4)
        lily.body.setSize(15, 35,true)
        lily.anims.play('andar');
        this.isJumping = false;

        // Adiciona a colisão entre o personagem e as plataformas
        this.physics.add.collider(lily, [grama1, grama2, grama3, grama4, grama5]);
        moeda = this.physics.add.sprite(100, 0, 'moeda').setScale(0.5);
        moeda.setCollideWorldBounds(true); // Colisão da moeda com os limites do mundo
        moeda.setBounce(0.7); // Comportamento de quicar
        this.physics.add.collider(moeda, [grama1, grama2, grama3, grama4, grama5]); // Colisão da moeda com a plataforma
        moeda2 = this.physics.add.sprite(300, 0, 'moeda').setScale(0.5);
        moeda2.setCollideWorldBounds(true); // Colisão da moeda com os limites do mundo
        moeda2.setBounce(0.7); // Comportamento de quicar
        this.physics.add.collider(moeda2, [grama1, grama2, grama3, grama4, grama5]); // Colisão da moeda com a plataforma
        moeda3 = this.physics.add.sprite(500, 0, 'moeda').setScale(0.5);
        moeda3.setCollideWorldBounds(true); // Colisão da moeda com os limites do mundo
        moeda3.setBounce(0.7); // Comportamento de quicar
        this.physics.add.collider(moeda3, [grama1, grama2, grama3, grama4, grama5]); // Colisão da moeda com a plataforma
        moeda4 = this.physics.add.sprite(700, 0, 'moeda').setScale(0.5);
        moeda4.setCollideWorldBounds(true); // Colisão da moeda com os limites do mundo
        moeda4.setBounce(0.7); // Comportamento de quicar
        this.physics.add.collider(moeda4, [grama1, grama2, grama3, grama4, grama5]); // Colisão da moeda com a plataforma
        // Adiciona texto do placar
        placar = this.add.text(50, 50, 'Moedas:' + pontuacao, {fontSize:'45px', fill:'#495613'});
        // Colisão entre o lily e a moeda
        this.physics.add.overlap(lily, moeda, function(){
        moeda.setVisible(false); // Torna a moeda invisível
        var posicaoMoeda_Y = Phaser.Math.RND.between(50, 650); // Gera posição aleatória para a moeda
        moeda.setPosition(posicaoMoeda_Y, 100); // Define nova posição da moeda
        pontuacao +=1; // aumento da pontuação a cada moeda
        placar.setText('Moedas:' + pontuacao); // Atualiza o texto do placar
        moeda.setVisible(true); // Torna a moeda visível novamente
        })
        this.physics.add.overlap(lily, moeda2, function(){
        moeda2.setVisible(false); // Torna a moeda invisível
        var posicaoMoeda_Y = Phaser.Math.RND.between(50, 650); // Gera posição aleatória para a moeda
        moeda2.setPosition(posicaoMoeda_Y, 100); // Define nova posição da moeda
        pontuacao +=1; // aumento da pontuação a cada moeda
        placar.setText('Moedas:' + pontuacao); // Atualiza o texto do placar
        moeda2.setVisible(true); // Torna a moeda visível novamente
        })
        this.physics.add.overlap(lily, moeda3, function(){
        moeda3.setVisible(false); // Torna a moeda invisível
        var posicaoMoeda_Y = Phaser.Math.RND.between(50, 650); // Gera posição aleatória para a moeda
        moeda3.setPosition(posicaoMoeda_Y, 100); // Define nova posição da moeda
        pontuacao +=1; // aumento da pontuação a cada moeda
        placar.setText('Moedas:' + pontuacao); // Atualiza o texto do placar
        moeda3.setVisible(true); // Torna a moeda visível novamente
        })
        this.physics.add.overlap(lily, moeda4, function(){
        moeda4.setVisible(false); // Torna a moeda invisível
        var posicaoMoeda_Y = Phaser.Math.RND.between(50, 650); // Gera posição aleatória para a moeda
        moeda4.setPosition(posicaoMoeda_Y, 100); // Define nova posição da moeda
        pontuacao +=1; // aumento da pontuação a cada moeda
        placar.setText('Moedas:' + pontuacao); // Atualiza o texto do placar
        moeda4.setVisible(true); // Torna a moeda visível novamente
        })

        // Cria a animação para o personagem
        this.anims.create({
            key: 'andar',
            frames: this.anims.generateFrameNumbers('lily', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        });
        // Cria o cursor de teclado
        this.cursor = this.input.keyboard.createCursorKeys();
    }

    update() {
        // Movimento do personagem pelas setas do teclado
        if (this.cursor.left.isDown) {
            lily.setVelocityX(-160);
            lily.anims.play('andar', true);
            lily.setFlip(false, false)
        } else if (this.cursor.right.isDown) {
            lily.setVelocityX(160);
            lily.anims.play('andar', true);
            lily.setFlip(true, false)
        } else {
            lily.setVelocityX(0);
            lily.anims.stop();
        }

        // Verifica se o personagem está no chão ou em contato com algum objeto para permiti-lo saltar
        if (this.cursor.up.isDown && !this.isJumping) {
            lily.setVelocityY(-330);
            this.isJumping = true;
        }
        // reinicia o salto quando o personagem estiver fora do chão
        if (lily.body.touching.down) {
            this.isJumping = false;
        }

        //se o jogador cair, a cena principal reinicia
        if(lily.y > 1010){
            this.scene.start("mainScene"); // Inicia a cena 1 assim como dito no comentário acima
        }
    }
}

