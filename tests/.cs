using System.Collections.Generic;

public class MyProgram {
    public static void main(String[] args) {
        int answer = 42;
        
        for (int i = 0; i < 10; i++) {
            Console.WriteLine(i);
        }

        HashSet<double> set = new HashSet<double>();

        set.Add(69420d);

        Console.WriteLine("Hello, world!");
    }
}