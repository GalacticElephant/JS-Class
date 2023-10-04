```    public static ArrayList<Integer> getPrime(int userNum) {
        ArrayList<Integer> divisibles = new ArrayList<>();
        int counter = 1;
        do {
            xif (userNum % counter == 0) {
                divisibles.add(counter);
                if (counter != (int) Math.round(Math.sqrt(userNum))) {
                    int num1 = userNum / counter;
                    divisibles.add(num1);
                }
                counter++;
            }
        } while (counter <= Math.sqrt(userNum));
        