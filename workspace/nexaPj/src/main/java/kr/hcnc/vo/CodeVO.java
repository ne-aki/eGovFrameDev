package kr.hcnc.vo;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CodeVO {
	private String code;
	private String codeNm;
	private LocalDateTime regDt;
	private LocalDateTime modDt;
}
