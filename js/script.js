const SIZE = 24;
let blockImages = [];
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
    for(let i = 1; i < 8; i++)
    {
        blockImages[i-1] = loadImage('assets/block' + i + '.png');
    }
}

function setup()
{
    createCanvas(SIZE*13, SIZE*21);
    structure = new Structure(floor(random(7)), 5, 0);
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
            structure = new Structure(floor(random(7)), 5, 0);
        }

        elapsed = GetCurrentTime();
    }

    structure.draw();
    for(let block of mapBlocks)
    {
        block.draw();
    }
}