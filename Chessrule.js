function checkIfValid (target){
   
    const targetId = Number (target.getAttribute('square-id')) || Number(target.parentNode.getAttribute('square-id'))
    const startId  = Number (startPositionId)
    const piece    = draggedElement.id
    console.log('targetId', targetId)
    console.log('startId', startId)
    console.log('piece',piece )

    switch (piece) {
        case 'pawn' :
            const starterRow = [48, 49, 50, 51, 52, 53, 54, 55]
            if (starterRow.includes(startId)&& startId + width * 2 === targetId || 
                startId + width === targetId ||
                startId + width - 1 === targetId && document.querySelector(`[square-id="${startId + width - 1}"]`).firstChild ||
                startId + width + 1 === targetId && document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild 
                ) {
                return true    
            }   
            break;
        case 'knight' :
            if (
                startId + width * 2 - 1 === targetId ||
                startId + width * 2 + 1 === targetId ||
                startId + width - 2 === targetId ||
                startId + width + 2 === targetId ||
                startId - width * 2 - 1 === targetId ||
                startId - width * 2 + 1 === targetId ||
                startId - width - 2 === targetId ||
                startId - width + 2 === targetId
                ) {
                return true
                }   
                break;
        case 'bishop' :
            if (
                startId + width + 1 === targetId ||
                startId + width * 2 + 2 === targetId && !document.querySelector (`[square-id="${startId + width + 1 }"]`).firstChild ||
                startId + width * 3 + 3 === targetId && !document.querySelector (`[square-id="${startId + width + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 + 2 }"]`).firstChild ||
                startId + width * 4 + 4 === targetId && !document.querySelector (`[square-id="${startId + width + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 + 3 }"]`).firstChild ||
                startId + width * 5 + 5 === targetId && !document.querySelector (`[square-id="${startId + width + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 + 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 4 + 4 }"]`).firstChild ||
                startId + width * 6 + 6 === targetId && !document.querySelector (`[square-id="${startId + width + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 + 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 4 + 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 5 + 5 }"]`).firstChild ||
                startId + width * 7 + 7 === targetId && !document.querySelector (`[square-id="${startId + width + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 + 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 4 + 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 5 + 5 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 6 + 6 }"]`).firstChild ||
                // ----
                startId - width - 1 === targetId ||
                startId - width * 2 - 2 === targetId && !document.querySelector (`[square-id="${startId - width - 1 }"]`).firstChild ||
                startId - width * 3 - 3 === targetId && !document.querySelector (`[square-id="${startId - width - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 - 2 }"]`).firstChild ||
                startId - width * 4 - 4 === targetId && !document.querySelector (`[square-id="${startId - width - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 - 3 }"]`).firstChild ||
                startId - width * 5 - 5 === targetId && !document.querySelector (`[square-id="${startId - width - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 - 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 4 - 4 }"]`).firstChild ||
                startId - width * 6 - 6 === targetId && !document.querySelector (`[square-id="${startId - width - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 - 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 4 - 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 5 - 5 }"]`).firstChild ||
                startId - width * 7 - 7 === targetId && !document.querySelector (`[square-id="${startId - width - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 - 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 4 - 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 5 - 5 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 6 - 6 }"]`).firstChild||
                // ----
                startId - width + 1 === targetId ||
                startId - width * 2 + 2 === targetId && !document.querySelector (`[square-id="${startId - width + 1 }"]`).firstChild ||
                startId - width * 3 + 3 === targetId && !document.querySelector (`[square-id="${startId - width + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 + 2 }"]`).firstChild ||
                startId - width * 4 + 4 === targetId && !document.querySelector (`[square-id="${startId - width + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 + 3 }"]`).firstChild ||
                startId - width * 5 + 5 === targetId && !document.querySelector (`[square-id="${startId - width + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 + 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 4 + 4 }"]`).firstChild ||
                startId - width * 6 + 6 === targetId && !document.querySelector (`[square-id="${startId - width + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 + 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 4 + 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 5 + 5 }"]`).firstChild ||
                startId - width * 7 + 7 === targetId && !document.querySelector (`[square-id="${startId - width + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 + 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 4 + 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 5 + 5 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 6 + 6 }"]`).firstChild||
                // --- 
                startId + width - 1 === targetId ||
                startId + width * 2 - 2 === targetId && !document.querySelector (`[square-id="${startId + width - 1 }"]`).firstChild ||
                startId + width * 3 - 3 === targetId && !document.querySelector (`[square-id="${startId + width - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 - 2 }"]`).firstChild ||
                startId + width * 4 - 4 === targetId && !document.querySelector (`[square-id="${startId + width - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 - 3 }"]`).firstChild ||
                startId + width * 5 - 5 === targetId && !document.querySelector (`[square-id="${startId + width - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 - 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 4 - 4 }"]`).firstChild ||
                startId + width * 6 - 6 === targetId && !document.querySelector (`[square-id="${startId + width - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 - 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 4 - 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 5 - 5 }"]`).firstChild ||
                startId + width * 7 - 7 === targetId && !document.querySelector (`[square-id="${startId + width - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 - 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 4 - 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 5 - 5 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 6 - 6 }"]`).firstChild
                 ) {
                return true
             }
            break;
           case 'rook' :
            if (
                startId + width === targetId ||
                startId + width * 2 === targetId && !document.querySelector (`[square-id="${startId + width }"]`).firstChild ||
                startId + width * 3 === targetId && !document.querySelector (`[square-id="${startId + width }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 }"]`).firstChild ||
                startId + width * 4 === targetId && !document.querySelector (`[square-id="${startId + width }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 }"]`).firstChild ||
                startId + width * 5 === targetId && !document.querySelector (`[square-id="${startId + width }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 4 }"]`).firstChild ||
                startId + width * 6 === targetId && !document.querySelector (`[square-id="${startId + width }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 5 }"]`).firstChild ||
                startId + width * 7 === targetId && !document.querySelector (`[square-id="${startId + width }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 5 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 6 }"]`).firstChild ||
                // ----
                startId - width === targetId ||
                startId - width * 2 === targetId && !document.querySelector (`[square-id="${startId - width }"]`).firstChild ||
                startId - width * 3 === targetId && !document.querySelector (`[square-id="${startId - width }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 }"]`).firstChild ||
                startId - width * 4 === targetId && !document.querySelector (`[square-id="${startId - width }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 }"]`).firstChild ||
                startId - width * 5 === targetId && !document.querySelector (`[square-id="${startId - width }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 4 }"]`).firstChild ||
                startId - width * 6 === targetId && !document.querySelector (`[square-id="${startId - width }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 5 }"]`).firstChild ||
                startId - width * 7 === targetId && !document.querySelector (`[square-id="${startId - width }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 5 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 6 }"]`).firstChild||
                // ----
                startId + 1 === targetId ||
                startId + 2 === targetId && !document.querySelector (`[square-id="${startId + 1 }"]`).firstChild ||
                startId + 3 === targetId && !document.querySelector (`[square-id="${startId + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 2 }"]`).firstChild ||
                startId + 4 === targetId && !document.querySelector (`[square-id="${startId + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 3 }"]`).firstChild ||
                startId + 5 === targetId && !document.querySelector (`[square-id="${startId + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 4 }"]`).firstChild ||
                startId + 6 === targetId && !document.querySelector (`[square-id="${startId + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 5 }"]`).firstChild ||
                startId + 7 === targetId && !document.querySelector (`[square-id="${startId + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 5 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 6 }"]`).firstChild ||
                // ----
                startId - 1 === targetId ||
                startId - 2 === targetId && !document.querySelector (`[square-id="${startId - 1 }"]`).firstChild ||
                startId - 3 === targetId && !document.querySelector (`[square-id="${startId - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 2 }"]`).firstChild ||
                startId - 4 === targetId && !document.querySelector (`[square-id="${startId - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 3 }"]`).firstChild ||
                startId - 5 === targetId && !document.querySelector (`[square-id="${startId - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 4 }"]`).firstChild ||
                startId - 6 === targetId && !document.querySelector (`[square-id="${startId - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 5 }"]`).firstChild ||
                startId - 7 === targetId && !document.querySelector (`[square-id="${startId - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 5 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 6 }"]`).firstChild
                ) {
                return true
            }
            break;
        case 'queen' :
            if (
                startId + width + 1 === targetId ||
                startId + width * 2 + 2 === targetId && !document.querySelector (`[square-id="${startId + width + 1 }"]`).firstChild ||
                startId + width * 3 + 3 === targetId && !document.querySelector (`[square-id="${startId + width + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 + 2 }"]`).firstChild ||
                startId + width * 4 + 4 === targetId && !document.querySelector (`[square-id="${startId + width + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 + 3 }"]`).firstChild ||
                startId + width * 5 + 5 === targetId && !document.querySelector (`[square-id="${startId + width + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 + 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 4 + 4 }"]`).firstChild ||
                startId + width * 6 + 6 === targetId && !document.querySelector (`[square-id="${startId + width + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 + 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 4 + 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 5 + 5 }"]`).firstChild ||
                startId + width * 7 + 7 === targetId && !document.querySelector (`[square-id="${startId + width + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 + 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 4 + 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 5 + 5 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 6 + 6 }"]`).firstChild ||
                // ----
                startId - width - 1 === targetId ||
                startId - width * 2 - 2 === targetId && !document.querySelector (`[square-id="${startId - width - 1 }"]`).firstChild ||
                startId - width * 3 - 3 === targetId && !document.querySelector (`[square-id="${startId - width - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 - 2 }"]`).firstChild ||
                startId - width * 4 - 4 === targetId && !document.querySelector (`[square-id="${startId - width - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 - 3 }"]`).firstChild ||
                startId - width * 5 - 5 === targetId && !document.querySelector (`[square-id="${startId - width - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 - 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 4 - 4 }"]`).firstChild ||
                startId - width * 6 - 6 === targetId && !document.querySelector (`[square-id="${startId - width - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 - 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 4 - 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 5 - 5 }"]`).firstChild ||
                startId - width * 7 - 7 === targetId && !document.querySelector (`[square-id="${startId - width - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 - 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 4 - 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 5 - 5 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 6 - 6 }"]`).firstChild||
                // ----
                startId - width + 1 === targetId ||
                startId - width * 2 + 2 === targetId && !document.querySelector (`[square-id="${startId - width + 1 }"]`).firstChild ||
                startId - width * 3 + 3 === targetId && !document.querySelector (`[square-id="${startId - width + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 + 2 }"]`).firstChild ||
                startId - width * 4 + 4 === targetId && !document.querySelector (`[square-id="${startId - width + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 + 3 }"]`).firstChild ||
                startId - width * 5 + 5 === targetId && !document.querySelector (`[square-id="${startId - width + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 + 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 4 + 4 }"]`).firstChild ||
                startId - width * 6 + 6 === targetId && !document.querySelector (`[square-id="${startId - width + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 + 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 4 + 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 5 + 5 }"]`).firstChild ||
                startId - width * 7 + 7 === targetId && !document.querySelector (`[square-id="${startId - width + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 + 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 4 + 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 5 + 5 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 6 + 6 }"]`).firstChild||
                // --- 
                startId + width - 1 === targetId ||
                startId + width * 2 - 2 === targetId && !document.querySelector (`[square-id="${startId + width - 1 }"]`).firstChild ||
                startId + width * 3 - 3 === targetId && !document.querySelector (`[square-id="${startId + width - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 - 2 }"]`).firstChild ||
                startId + width * 4 - 4 === targetId && !document.querySelector (`[square-id="${startId + width - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 - 3 }"]`).firstChild ||
                startId + width * 5 - 5 === targetId && !document.querySelector (`[square-id="${startId + width - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 - 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 4 - 4 }"]`).firstChild ||
                startId + width * 6 - 6 === targetId && !document.querySelector (`[square-id="${startId + width - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 - 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 4 - 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 5 - 5 }"]`).firstChild ||
                startId + width * 7 - 7 === targetId && !document.querySelector (`[square-id="${startId + width - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 - 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 4 - 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 5 - 5 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 6 - 6 }"]`).firstChild||
                // ----
                startId + width === targetId ||
                startId + width * 2 === targetId && !document.querySelector (`[square-id="${startId + width }"]`).firstChild ||
                startId + width * 3 === targetId && !document.querySelector (`[square-id="${startId + width }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 }"]`).firstChild ||
                startId + width * 4 === targetId && !document.querySelector (`[square-id="${startId + width }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 }"]`).firstChild ||
                startId + width * 5 === targetId && !document.querySelector (`[square-id="${startId + width }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 4 }"]`).firstChild ||
                startId + width * 6 === targetId && !document.querySelector (`[square-id="${startId + width }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 5 }"]`).firstChild ||
                startId + width * 7 === targetId && !document.querySelector (`[square-id="${startId + width }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 5 }"]`).firstChild && !document.querySelector (`[square-id="${startId + width * 6 }"]`).firstChild ||
                // ----
                startId - width === targetId ||
                startId - width * 2 === targetId && !document.querySelector (`[square-id="${startId - width }"]`).firstChild ||
                startId - width * 3 === targetId && !document.querySelector (`[square-id="${startId - width }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 }"]`).firstChild ||
                startId - width * 4 === targetId && !document.querySelector (`[square-id="${startId - width }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 }"]`).firstChild ||
                startId - width * 5 === targetId && !document.querySelector (`[square-id="${startId - width }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 4 }"]`).firstChild ||
                startId - width * 6 === targetId && !document.querySelector (`[square-id="${startId - width }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 5 }"]`).firstChild ||
                startId - width * 7 === targetId && !document.querySelector (`[square-id="${startId - width }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 5 }"]`).firstChild && !document.querySelector (`[square-id="${startId - width * 6 }"]`).firstChild||
                // ----
                startId + 1 === targetId ||
                startId + 2 === targetId && !document.querySelector (`[square-id="${startId + 1 }"]`).firstChild ||
                startId + 3 === targetId && !document.querySelector (`[square-id="${startId + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 2 }"]`).firstChild ||
                startId + 4 === targetId && !document.querySelector (`[square-id="${startId + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 3 }"]`).firstChild ||
                startId + 5 === targetId && !document.querySelector (`[square-id="${startId + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 4 }"]`).firstChild ||
                startId + 6 === targetId && !document.querySelector (`[square-id="${startId + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 5 }"]`).firstChild ||
                startId + 7 === targetId && !document.querySelector (`[square-id="${startId + 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 5 }"]`).firstChild && !document.querySelector (`[square-id="${startId + 6 }"]`).firstChild ||
                // ----
                startId - 1 === targetId ||
                startId - 2 === targetId && !document.querySelector (`[square-id="${startId - 1 }"]`).firstChild ||
                startId - 3 === targetId && !document.querySelector (`[square-id="${startId - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 2 }"]`).firstChild ||
                startId - 4 === targetId && !document.querySelector (`[square-id="${startId - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 3 }"]`).firstChild ||
                startId - 5 === targetId && !document.querySelector (`[square-id="${startId - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 4 }"]`).firstChild ||
                startId - 6 === targetId && !document.querySelector (`[square-id="${startId - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 5 }"]`).firstChild ||
                startId - 7 === targetId && !document.querySelector (`[square-id="${startId - 1 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 2 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 3 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 4 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 5 }"]`).firstChild && !document.querySelector (`[square-id="${startId - 6 }"]`).firstChild
            ) { 
                return true
            }
            break;
        case 'king' :
            if (
                startId + 1 === targetId ||
                startId - 1 === targetId ||
                startId + width === targetId ||
                startId - width === targetId ||
                startId + width + 1 === targetId ||
                startId + width - 1 === targetId ||
                startId - width + 1 === targetId ||
                startId - width - 1 === targetId
            ) {
                return true
            }
    }
}
