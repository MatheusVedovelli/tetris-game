const SIZE = 32;
let blockImage;
let structure;
let elapsed = 0;
let delay = 1000;
let mapBlocks = [];

function GetCurrentTime()
{
    return (new Date()).getTime();
}

function preload()
{
    blockImage = loadImage('assets/block.png');
}

function setup()
{
    createCanvas(SIZE*17, SIZE*21);
    structure = new Structure(floor(random(2)), 8, 1);
}

function keyPressed()
{
    if(keyCode == DOWN_ARROW)
    {
        if(structure.canMove("down", mapBlocks))
            structure.moveVertical(1);        
    }

    if(keyCode == LEFT_ARROW && structure.canMove("left", mapBlocks))
        structure.moveHorizontal(keyCode, 1);

    if(keyCode == RIGHT_ARROW && structure.canMove("right", mapBlocks))
        structure.moveHorizontal(keyCode, 1);
}

function draw()
{
    background(0);

    let now = GetCurrentTime();
    if(elapsed + delay < now)
    {
        if(structure.canMove("down", mapBlocks))
            structure.moveVertical(1);
        else
        {
            structure.blocks.map((block) => mapBlocks.push(block));
            structure = new Structure(floor(random(2)), 8, 1);
        }

        elapsed = GetCurrentTime();
    }

    structure.draw();
    for(let block of mapBlocks)
    {
        block.draw();
    }
}