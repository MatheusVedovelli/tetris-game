let blockStructure = [
    [{x:0, y:0}, {x:1, y:0}, {x:2, y:0}, {x:3, y:0}],
    [{x:0, y:0}, {x:0, y:1}, {x:1, y:1}, {x:2, y:1}],
];

class Structure
{
    constructor(type, x, y)
    {
        let struct = blockStructure[type];
        this.blocks = [];

        for(let block of struct)
        {
            this.blocks.push(new Block(block.x + x, block.y + y));
        }
    }

    canMove(side, mapblocks)
    {
        switch(side)
        {
            case "down":
                for(let block of this.blocks)
                {
                    if(mapblocks.length)
                    {
                        for(let mapblock of mapblocks)
                        {
                            if(block.y + 1 == mapblock.y && block.x == mapblock.x)
                                return false;
                        }
                    }

                    if(block.y + 1 >= height/SIZE)
                        return false;
                }
                break;

            case "left":
                for(let block of this.blocks)
                {
                    if(mapblocks.length)
                    {
                        for(let mapblock of mapblocks)
                        {
                            if(block.x - 1 == mapblock.x && block.y == mapblock.y)
                                return false;
                        }
                    }

                    if(block.x == 0)
                        return false;
                }
                break;

            case "right":
                for(let block of this.blocks)
                {
                    if(mapblocks.length)
                    {
                        for(let mapblock of mapblocks)
                        {
                            if(block.x + 1 == mapblock.x && block.y == mapblock.y)
                                return false;
                        }
                    }

                    if(block.x == width/SIZE - 1)
                        return false;
                }
                break;
        }

        return true;
    }

    moveVertical(dist)
    {
        for(let block of this.blocks)
        {
            block.moveVertical(dist);
        }
    }

    moveHorizontal(side, dist)
    {
        for(let block of this.blocks)
        {
            block.moveHorizontal(side, dist);
        }
    }

    draw()
    {
        for(let block of this.blocks)
        {
            block.draw();
        }
    }
}