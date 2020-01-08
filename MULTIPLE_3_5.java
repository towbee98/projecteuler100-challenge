import java.util.*;
public class MULTIPLE_3_5 {
/*my first #projecteuler100 challenge solution*/
	public static void main(String[] args)
	{
		Scanner input= new Scanner(System.in);
		System.out.println("enter a number to find the multiples of 3 and 5 below it:");
		int num= input.nextInt();
		int count=0;
			for(int i=0;i<10;i++)
			{
				if((i%3==0)||(i%5==0))
					count+=i;
			}
		System.out.printf("sum of all multiples of 3 and 5 below %d is %d",num,count);

	}

}
