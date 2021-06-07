const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
const whitekeys = document.querySelectorAll('.key.white')
const blackkeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
    key.addEventListener('click', () => playnote(key))
})

document.addEventListener('keydown', e => {
    // E = [object KeyboardEvent]
    const key = e.key    // e.key returns the pressed key ('z', 'p',...)
    
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)  //returns the position of the pressed key in the white table, or -1 if not found
    const blackKeyIndex = BLACK_KEYS.indexOf(key)
    
    if(whiteKeyIndex > -1) playnote(whitekeys[whiteKeyIndex])
    if(blackKeyIndex > -1) playnote(blackkeys[blackKeyIndex])
})

function playnote(key){
    
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0     // Reset the audio file at the begi.. to start another one
    
    noteAudio.play()
    //Animation when we click on a button
    key.classList.add('active')

    //Remove the animation once the audio ends...
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
} 

// Songs
var times = 0
var var1, var2, var3, var4, var5;
function song(){
    // alert('Before Time = 0')
    // playPressKey(2, 'z', 500, var1);
    // playPressKey(1, 'x', 1200, var2);
    // playPressKey(1, 'z', 1750, var3);
    // playPressKey(1, 'v', 2150, var4);
    // playPressKey(1, 'c', 2500, var5);
    songvarz = setInterval(function(){ 
            if(times < 2){
                const whiteKeyIndex = WHITE_KEYS.indexOf('z')
                playnote(whitekeys[whiteKeyIndex])
                times = times + 1;
                // alert(times)
            }else{
                // alert('Clear Interval')
                clearInterval(songvarz)
            }; }
            , 500);
    var times1 = 0;
    songvarx = setInterval(function(){ 
            if(times1 < 1){
                const whiteKeyIndex = WHITE_KEYS.indexOf('x')
                playnote(whitekeys[whiteKeyIndex])
                times1 = times1 + 1;
                // alert(times)
            }else{
                // alert('Clear Interval')
                clearInterval(songvarx)
            }; }
            , 1200);
    times2 = 0;
    songvarz1 = setInterval(function(){ 
            if(times2 < 1){
                const whiteKeyIndex = WHITE_KEYS.indexOf('z')
                playnote(whitekeys[whiteKeyIndex])
                times2 = times2 + 1;
                // alert(times)
            }else{
                // alert('Clear Interval')
                clearInterval(songvarz1)
            }; }
            , 1750);
    times3 = 0;
    songvarv = setInterval(function(){ 
            if(times3 < 1){
                const whiteKeyIndex = WHITE_KEYS.indexOf('v')
                playnote(whitekeys[whiteKeyIndex])
                times3 = times3 + 1;
                // alert(times)
            }else{
                // alert('Clear Interval')
                clearInterval(songvarv)
            }; }
            , 2150);
    times4 = 0;
    songvarc = setInterval(function(){ 
            if(times4 < 1){
                const whiteKeyIndex = WHITE_KEYS.indexOf('c')
                playnote(whitekeys[whiteKeyIndex])
                times4 = times4 + 1;
                // alert(times)
            }else{
                // alert('Clear Interval')
                clearInterval(songvarc)
            }; }
            , 2500);

}   

function playPressKey(nbTimes, pressedkey, millisec, variable){
    // alert(pressedkey)
    variable = setInterval(function(){ 
        if(times < nbTimes){
            const whiteKeyIndex = WHITE_KEYS.indexOf(pressedkey)
            playnote(whitekeys[whiteKeyIndex])
            times = times + 1;
            // alert(times)
        }else{
            // alert('Clear Interval')
            clearInterval(variable)
            times = 0
        }; }
        , millisec);
}

// Round two
// var times5 = 0;
// songvarz1 = setInterval(function(){ 
//     if(times5 < 2){
//         const whiteKeyIndex = WHITE_KEYS.indexOf('z')
//         playnote(whitekeys[whiteKeyIndex])
//         times5 = times5 + 1;
//         // alert(times)
//     }else{
//         // alert('Clear Interval')
//         clearInterval(songvarz1)
//     }; }
//     , 3000);
// var times6 = 0;
// songvarx1 = setInterval(function(){ 
//         if(times6 < 1){
//             const whiteKeyIndex = WHITE_KEYS.indexOf('x')
//             playnote(whitekeys[whiteKeyIndex])
//             times6 = times6 + 1;
//             // alert(times)
//         }else{
//             // alert('Clear Interval')
//             clearInterval(songvarx1)
//         }; }
//         , 3400);
// times7 = 0;
// songvarz2 = setInterval(function(){ 
//         if(times7 < 1){
//             const whiteKeyIndex = WHITE_KEYS.indexOf('z')
//             playnote(whitekeys[whiteKeyIndex])
//             times7 = times7 + 1;
//             // alert(times)
//         }else{
//             // alert('Clear Interval')
//             clearInterval(songvarz2)
//         }; }
//         , 3550);
// times8 = 0;
// songvarb = setInterval(function(){ 
//         if(times8 < 1){
//             const whiteKeyIndex = WHITE_KEYS.indexOf('b')
//             playnote(whitekeys[whiteKeyIndex])
//             times8 = times8 + 1;
//             // alert(times)
//         }else{
//             // alert('Clear Interval')
//             clearInterval(songvarb)
//         }; }
//         , 4050);
// times9 = 0;
// songvarc1 = setInterval(function(){ 
//         if(times9 < 1){
//             const whiteKeyIndex = WHITE_KEYS.indexOf('c')
//             playnote(whitekeys[whiteKeyIndex])
//             times9 = times9 + 1;
//             // alert(times)
//         }else{
//             // alert('Clear Interval')
//             clearInterval(songvarc1)
//         }; }
//         , 4600);