import java.util.*;

public class Java {
    public static void main(String[] args) {
        HashMap<String, String> map = new HashMap<String, String>();

        System.out.println("Hello, world!");

        for (int i = 0; i < 10; i++) {
            map.put("key" + i, "value" + i);
        }
    }
}