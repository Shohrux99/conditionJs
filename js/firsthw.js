var age = prompt('Yoshingiz nechida?')


if (age > 0 && age <= 18) {
    alert('Yoshsiz. O`qishingiz kerak!')
} else {

    if (age > 18 && age <= 50) {
        alert('Ishlashingiz kerak!')
    } else {

        if (age > 50 && age <= 59) {
            alert('Yaqinda pensiyaga chiqasiz!')
        } else {

            if (age > 59 && age <= 150) {
                alert('Pensionerga o`xshaysiz, hali tirik bo`lsangiz :)')
            } else {

                if (age > 150) {
                    alert('Odam bu yoshda yashamasligi kerak :D')
                } else {

                    alert('Nimadur noto`g`ri ketib qoldi!')

                }

            }

        }

    }
}