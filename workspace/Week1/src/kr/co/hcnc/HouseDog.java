package kr.co.hcnc;

public class HouseDog extends Dog {
	public void sleep() {
        System.out.println(this.name + " zzz in house");
    }
	void sleep(int hour) {
        System.out.println(this.name + " zzz in house for " + hour + " hours");
    }
	public void sleep_super() {
		System.out.println();
	}
}
