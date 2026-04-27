
public class P4Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		P4 p4 = new P4();
		
		String[] cpr = {"pressure", "check", "repeat", "call", "respiration"};
		
		int[] result = p4.solution(cpr);
		
		System.out.println(java.util.Arrays.toString(result));
	}

}
