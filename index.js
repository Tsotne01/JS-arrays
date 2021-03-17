// სტუდენტი 1

// ქულები
const studentOneScores = [];

studentOneScores['javascript'] = 62;
studentOneScores['react'] = 57;
studentOneScores['python'] = 88;
studentOneScores['java'] = 90;

// ქულების ჯამი
const sumOfStudentOne = studentOneScores['javascript'] + studentOneScores['react'] + studentOneScores['python'] + studentOneScores['java']

// ქულების საშუალო
const avgOfStudentOne = (studentOneScores['javascript'] + studentOneScores['react'] + studentOneScores['python'] + studentOneScores['java']) / 4

// GPA
const gpaOfStudentOne = (1 * 4 + 0.5 * 7 + 3 * 6 + 3 * 3) / 20

// მონაცემების დამატება პირველი სტუდენტის მასივში
const studentOne = [];

studentOne['firstName'] = 'ჟან';
studentOne['lastName'] = 'რენო';
studentOne['age'] = 26;
studentOne['sumOfScores'] = sumOfStudentOne;
studentOne['avgOfScores'] = avgOfStudentOne;
studentOne['gpa'] = gpaOfStudentOne;

// console.log(`სტუდენტი 1: \nსახელი: ${studentOne['firstName']}`)
// console.log(`გვარი: ${studentOne['lastName']}`)
// console.log(`ასაკი: ${studentOne['age']}`)
// console.log(`ქულების ჯამი: ${studentOne['sumOfScores']}`)
// console.log(`ქულების საშუალო: ${studentOne['avgOfScores']}`)
// console.log(`GPA: ${studentOne['gpa']}\n`)

// სტუდენტი 2

// ქულები
const studentTwoScores = [];

studentTwoScores['javascript'] = 77;
studentTwoScores['react'] = 52;
studentTwoScores['python'] = 92;
studentTwoScores['java'] = 67;

// ქულების ჯამი
const sumOfStudentTwo = studentTwoScores['javascript'] + studentTwoScores['react'] + studentTwoScores['python'] + studentTwoScores['java']

// ქულების საშუალო
const avgOfStudentTwo = (studentTwoScores['javascript'] + studentTwoScores['react'] + studentTwoScores['python'] + studentTwoScores['java']) / 4

// GPA
const gpaOfStudentTwo = (2 * 4 + 0.5 * 7 + 4 * 6 + 1 * 3) / 20

// მონაცემების დამატება პირველი სტუდენტის მასივში
const studentTwo = [];

studentTwo['firstName'] = 'კლოდ';
studentTwo['lastName'] = 'მონე';
studentTwo['age'] = 19;
studentTwo['sumOfScores'] = sumOfStudentTwo;
studentTwo['avgOfScores'] = avgOfStudentTwo;
studentTwo['gpa'] = gpaOfStudentTwo;

// console.log(`სტუდენტი 2: \nსახელი: ${studentTwo['firstName']}`)
// console.log(`გვარი: ${studentTwo['lastName']}`)
// console.log(`ასაკი: ${studentTwo['age']}`)
// console.log(`ქულების ჯამი: ${studentTwo['sumOfScores']}`)
// console.log(`ქულების საშუალო: ${studentTwo['avgOfScores']}`)
// console.log(`GPA: ${studentTwo['gpa']}\n`)


// სტუდენტი 3

// ქულები
const studentThreeScores = [];

studentThreeScores['javascript'] = 51;
studentThreeScores['react'] = 98;
studentThreeScores['python'] = 65;
studentThreeScores['java'] = 70;

// ქულების ჯამი
const sumOfStudentThree = studentThreeScores['javascript'] + studentThreeScores['react'] + studentThreeScores['python'] + studentThreeScores['java']

// ქულების საშუალო
const avgOfStudentThree = (studentThreeScores['javascript'] + studentThreeScores['react'] + studentThreeScores['python'] + studentThreeScores['java']) / 4

// GPA
const gpaOfStudentThree = (0.5 * 4 + 4 * 7 + 1 * 6 + 1 * 3) / 20

// მონაცემების დამატება მესამე სტუდენტის მასივში
const studentThree = [];

studentThree['firstName'] = 'ვან';
studentThree['lastName'] = 'გოგი';
studentThree['age'] = 21;
studentThree['sumOfScores'] = sumOfStudentThree;
studentThree['avgOfScores'] = avgOfStudentThree;
studentThree['gpa'] = gpaOfStudentThree;

// console.log(`სტუდენტი 3: \nსახელი: ${studentThree['firstName']}`)
// console.log(`გვარი: ${studentThree['lastName']}`)
// console.log(`ასაკი: ${studentThree['age']}`)
// console.log(`ქულების ჯამი: ${studentThree['sumOfScores']}`)
// console.log(`ქულების საშუალო: ${studentThree['avgOfScores']}`)
// console.log(`GPA: ${studentThree['gpa']}\n`)

// სტუდენტი 4

// ქულები
const studentFourScores = [];

studentFourScores['javascript'] = 82;
studentFourScores['react'] = 53;
studentFourScores['python'] = 80;
studentFourScores['java'] = 65;

// ქულების ჯამი
const sumOfStudentFour = studentFourScores['javascript'] + studentFourScores['react'] + studentFourScores['python'] + studentFourScores['java']

// ქულების საშუალო
const avgOfStudentFour = (studentFourScores['javascript'] + studentFourScores['react'] + studentFourScores['python'] + studentFourScores['java']) / 4

// GPA
const gpaOfStudentFour = (3 * 4 + 0.5 * 7 + 2 * 6 + 1 * 3) / 20

// მონაცემების დამატება მეოთხე სტუდენტის მასივში
const studentFour = [];

studentFour['firstName'] = 'დამ';
studentFour['lastName'] = 'სქვიეარი';
studentFour['age'] = 36;
studentFour['sumOfScores'] = sumOfStudentFour;
studentFour['avgOfScores'] = avgOfStudentFour;
studentFour['gpa'] = gpaOfStudentFour;

// console.log(`სტუდენტი 4: \nსახელი: ${studentFour['firstName']}`)
// console.log(`გვარი: ${studentFour['lastName']}`)
// console.log(`ასაკი: ${studentFour['age']}`)
// console.log(`ქულების ჯამი: ${studentFour['sumOfScores']}`)
// console.log(`ქულების საშუალო: ${studentFour['avgOfScores']}`)
// console.log(`GPA: ${studentFour['gpa']}\n`)

// საერთო ქულების საშუალო 
const avgOfAllScores = (avgOfStudentOne + avgOfStudentTwo + avgOfStudentThree + avgOfStudentFour) / 4

// console.log(avgOfAllScores)

// სტატუსის მინიჭება

const studentOneStatus = (avgOfStudentOne > avgOfAllScores) ? (studentOne['status'] = 'წითელი დიპლომის მქონე') : (studentOne['status'] = 'ვრაგ ნაროდა')

const studentTwoStatus = (avgOfStudentTwo > avgOfAllScores) ? (studentTwo['status'] = 'წითელი დიპლომის მქონე') : (studentTwo['status'] = 'ვრაგ ნაროდა')

const studentThreeStatus = (avgOfStudentThree > avgOfAllScores) ? (studentThree['status'] = 'წითელი დიპლომის მქონე') : (studentThree['status'] = 'ვრაგ ნაროდა')

const studentFourStatus = (avgOfStudentFour > avgOfAllScores) ? (studentFour['status'] = 'წითელი დიპლომის მქონე') : (studentFour['status'] = 'ვრაგ ნაროდა')


// საუკეთესო GPA-ს მქონე
if (gpaOfStudentOne > gpaOfStudentTwo && gpaOfStudentOne > gpaOfStudentThree && gpaOfStudentOne > gpaOfStudentFour) {
    console.log(`საუკეთესო სტუდენტი გახდა ${studentOne['firstName']} ${studentOne['lastName']}, ჯიპიეით - ${studentOne['gpa']}!`)
} else if (gpaOfStudentTwo > gpaOfStudentOne && gpaOfStudentTwo > gpaOfStudentThree && gpaOfStudentTwo > gpaOfStudentFour) {
    console.log(`საუკეთესო სტუდენტი გახდა ${studentTwo['firstName']} ${studentTwo['lastName']}, ჯიპიეით - ${studentTwo['gpa']}!`)
} else if (gpaOfStudentThree > gpaOfStudentOne && gpaOfStudentThree > gpaOfStudentTwo && gpaOfStudentThree > gpaOfStudentFour) {
    console.log(`საუკეთესო სტუდენტი გახდა ${studentThree['firstName']} ${studentThree['lastName']}, ჯიპიეით - ${studentThree['gpa']}!`)
} else {
    console.log(`საუკეთესო სტუდენტი გახდა ${studentFour['firstName']} ${studentFour['lastName']}, ჯიპიეით - ${studentFour['gpa']}!`)
}


// საუკეთესო სტუდენტი 21+ ასაკში
if (studentOne['age'] > 21 && avgOfStudentOne > avgOfStudentTwo && avgOfStudentOne > avgOfStudentThree && avgOfStudentOne > avgOfStudentFour) {
    console.log(`საუკეთესო სტუდენტი 21+ ასაკში გახდა ${studentOne['firstName']} ${studentOne['lastName']}, საშუალო ქულით - ${avgOfStudentOne}!`)
} else if (studentTwo['age'] > 21 && avgOfStudentTwo > avgOfStudentOne && avgOfStudentTwo > avgOfStudentThree && avgOfStudentTwo > avgOfStudentFour) {
    console.log(`საუკეთესო სტუდენტი 21+ ასაკში გახდა ${studentTwo['firstName']} ${studentTwo['lastName']}, საშუალო ქულით - ${avgOfStudentTwo}!`)
} else if (studentThree['age'] > 21 && avgOfStudentThree > avgOfStudentOne && avgOfStudentThree > avgOfStudentTwo && avgOfStudentThree > avgOfStudentFour) {
    console.log(`საუკეთესო სტუდენტი 21+ ასაკში გახდა ${studentThree['firstName']} ${studentThree['lastName']}, საშუალო ქულით - ${avgOfStudentThree}!`)
} else if (studentFour['age'] > 21 && avgOfStudentFour > avgOfStudentOne && avgOfStudentFour > avgOfStudentTwo && avgOfStudentFour > avgOfStudentThree) {
    console.log(`საუკეთესო სტუდენტი 21+ ასაკში გახდა ${studentFour['firstName']} ${studentFour['lastName']}, საშუალო ქულით - ${avgOfStudentFour}!`)
} else {
    console.log('არავინ არაა 21 წელზე ზემოთ.')
}

// საშუალო ქულები Front-End-ში

const frontAvgOne = (studentOneScores['javascript'] + studentOneScores['react']) / 2
const frontAvgTwo = (studentTwoScores['javascript'] + studentTwoScores['react']) / 2
const frontAvgThree = (studentThreeScores['javascript'] + studentThreeScores['react']) / 2
const frontAvgFour = (studentFourScores['javascript'] + studentFourScores['react']) / 2


// საუკეთესო სტუდენტი Front - End - ში
if (frontAvgOne > frontAvgTwo && frontAvgOne > frontAvgThree && frontAvgOne > frontAvgFour) {
    console.log(`საუკეთესო Front-End-ში არის ${studentOne['firstName']} ${studentOne['lastName']}, საშუალო ქულით - ${frontAvgOne}!`)
} else if (frontAvgTwo > frontAvgOne && frontAvgTwo > frontAvgThree && frontAvgTwo > frontAvgFour) {
    console.log(`საუკეთესო Front-End-ში არის ${studentTwo['firstName']} ${studentTwo['lastName']}, საშუალო ქულით - ${frontAvgTwo}!`)
} else if (frontAvgThree > frontAvgOne && frontAvgThree > frontAvgTwo && frontAvgThree > frontAvgFour) {
    console.log(`საუკეთესო Front-End-ში არის ${studentThree['firstName']} ${studentThree['lastName']}, საშუალო ქულით - ${frontAvgThree}!`)
} else {
    console.log(`საუკეთესო Front-End-ში არის ${studentFour['firstName']} ${studentFour['lastName']}, საშუალო ქულით - ${frontAvgFour}!`)
}