package kr.co.hcnc;

public class Day3_2 {
	
	//public : 어느 클래스에서든 접근 가능
	// default 동일한 패키지에서만 접근 가능
	// protected : 상속받은 클래스에서 접근 가능
	//private 자기 자신 클래스 내부에서만 접근 가능
	//
	// private < protected < default < public
	
	public String output1() {
		return "output1";
	}
	public String output1(boolean flag) {
		if(flag == true) {
			return output4();
		} else {
			return output1();
		}
	}
	String output2() {
		return "output2";
	}
	protected String output3() {
		return "output3";
	}
	private String output4() {
		return "output4";
	}
}
