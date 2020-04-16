class Block
{
    constructor(type, x, y)
    {
        this.x = x;
        this.y = y;
        this.image = blockImages[type];
    }

    moveVertical(dist)
    {
        this.y += dist;

        this.y = constrain(this.y, 0, height/SIZE - 1);
    }

    moveHorizontal(side, dist)
    {
        this.x += side == LEFT_ARROW ? -dist : dist;

        this.x = constrain(this.x, 0, width/SIZE - 1);
    }

    draw()
    {
        image(this.image, this.x * SIZE, this.y * SIZE);
    }
}