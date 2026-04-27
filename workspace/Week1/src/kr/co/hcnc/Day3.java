package kr.co.hcnc;
import java.util.ArrayList;

public class Day3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// switch = case
		// for
		// for each
		// while
		
		String a = "2";
		switch (a) {
		case "1":
			System.out.println("a = 1");
			break;
		case "2":
			System.out.println("a = 2");
			break;
		default:
			System.out.println("a != 1 and a != 2");
			break;
			
		}
		
		//반복문을 쓸 때
		//for(변수 선언부/조건부/실행부)
		//i 변수를 밖에서도 쓸 수 있음. 그럼 int i = 0과 i++는 생략 가능
		for(int i = 0; i < 10; i++) {
			System.out.println("i = " + i);
		}
		
		int i = 0;
		
		//for each
		//for(내가 사용할 변수 : 기준이 되는 변수)
		//continue > 뒤의 코드를 실행하지 않고 다시 반복문을 실행
		//break > 뒤에 코드를 실행하지 않고 다시 반복문을 실행
		int[] b = new int[10];
		for(int j = 0; j < b.length; j++) {
			if (b[j] == 7) break;
			b[j] = j;
			System.out.println("b[i] = " + b[j]);
		}
		for(int c : b) {
			System.out.println("c = " + c);
		}
		ArrayList<String> e = new ArrayList<String>();
		e.add("a");
		e.add("b");
		e.add("c");
		e.add("d");
		e.add("e");
		for(String f : e) {
			System.out.println("f = " + f);
		}
		
		//while (조건문) true 내용상에서 특정 조건일 때 break를 거는 조건이 필요합니다.
		int g = 0;
		while(true) {
			System.out.println("g = " + g);
			g++;
			if(g == 3) break;
		}
		
		
		Day3_2 h = new Day3_2();
		System.out.println("output1 = " + h.output1());
		System.out.println("output2 = " + h.output2());
		System.out.println("output3 = " + h.output3());
		System.out.println("output1(true) = " + h.output1(true));
		System.out.println("output1(false) = " + h.output1(false));
		
		Day3_B day3b = new Day3_B();
		day3b.setString("a", "b", "c", "d", "e");
		day3b.output();
		
		Day3_B day3b2 = new Day3_B("1", "2", "3", "4", "5");
		day3b2.output();
		
		Day3_CImpl day3c = new Day3_CImpl();
		// day3c
		
//		String a1;
//		String a2;
		
		
//		try {
//			//실행할 코드
//			if(a1.equals(a2)) {
//				System.out.println("a1 equals a2");
//			} else {
//				System.out.println("a1 not equals a2");
//			}
//		} catch (Exception ee) {
//			//오류가 발생하였을 때 실행하는 코드
//			System.out.println("오류가 발생하였습니다.");
//		} finally {
//			//코드 실행이 끝난 후 무조건 실행되는 실행부
//			System.out.println("finally 실행부로, 성공여부에 상관없이 무조건 실행 됩니다.");
//			
//		}
		//오버로딩 / 오버라이딩
		HouseDog houseDog = new HouseDog();
		houseDog.setName("hotdog");
		houseDog.sleep();
		houseDog.sleep(1);
		houseDog.sleep_super();
		
		//다형성
		Animal dog = new Dog(); //new Animal() 대신 newDog() 로 선언 가능 >>> Dog 라는 클래스가 Animal 이라는 클래스를 상속받고 있기 때문이다.
		Dog buldog = new HouseDog();
		buldog.sleep();
	}

}
