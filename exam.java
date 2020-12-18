/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package simplecalc.exam1;

import java.io.BufferedReader;
import java.io.InputStreamReader;

/**
 *
 * @author ц
 */
public class exam {
    
public static void testArray() {
    int myArray[] = {5, 10, 15, 20};
    int sum = 0;
    for (int i = 0; i < myArray.length; i++) {
        sum = sum + myArray[i];
    }
    System.out.println(sum);
}

}