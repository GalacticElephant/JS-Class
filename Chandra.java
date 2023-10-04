public static ArrayList<Integer> getPrime(int userNum) {
    ArrayList<Integer> divisors = new ArrayList<>();
    int counter = 1;
    int sqrtUserNum = (int) Math.round(Math.sqrt(userNum)); // Calculate sqrt(userNum) once
    do {
        if (userNum % counter == 0) {
            divisors.add(counter);
            if (counter != sqrtUserNum) { // Use the precalculated sqrtUserNum
                int num1 = userNum / counter;
                divisors.add(num1);
            }
        }
        counter++;
    } while (counter <= sqrtUserNum);
    return divisors;
