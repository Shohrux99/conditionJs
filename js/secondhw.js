var a = prompt('Birinchi sonni kiriting:')
var b = prompt('Ikkinchi sonni kiriting:')
var c = prompt('Uchinchi sonni kiriting:')


if (a > b && b > c) {
    alert('O`rtacha qiymat: ' + b)
} else {
    if (c > b && b > a) {
        alert('O`rtacha qiymat: ' + b)
    } else {
        if (b > a && a > c) {
            alert('O`rtacha qiymat: ' + a)
        } else {
            if (a > c && c > b) {
                alert('O`rtacha qiymat: ' + c)
            } else {
                if (c > a && a > b) {
                    alert('O`rtacha qiymat: ' + a)
                } else {
                    if (b > c && c > a) {
                        alert('O`rtacha qiymat: ' + c)
                    } else {
                        alert('Nimadur noto`g`ri ketdi!')
                    }
                }
            }
        }
    }
}