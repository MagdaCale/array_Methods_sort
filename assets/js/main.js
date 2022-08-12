// CodeFlow Übung lev1_1: Array sort()
console.log('CodeFlow Übung lev1_1: Array sort()')

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
]

let sortierung = () => {
    console.log(languages.sort())
}

sortierung()




// CodeFlow Übung lev1_2: Array reserve()
console.log('CodeFlow Übung lev1_2: Array reverse()')

let languagesReversve = [...languages]
//console.log(languagesReversve)

let languagesReversve2 = () => {

    //languagesReversve.sort()
    languagesReversve.reverse()

    console.log(languagesReversve)
}

languagesReversve2() 



// CodeFlow Übung lev2_2: sort() bigger numbers
console.log('CodeFlow Übung lev2_2: sort() bigger numbers')

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000]

numArray2.sort((a,b) => a-b)
console.log(numArray2)



// CodeFlow Übung lev2_2: sort() bigger numbers
console.log('CodeFlow Übung lev2_2: sort() bigger numbers')



