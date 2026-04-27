package kr.board.vo;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BoardVO {
	private int boardNum;
	private String title;
	private String content;
	private String memId;
	private int readCnt;
	//private LocalDateTime regDate;
	//private LocalDateTime modDate;
	private String regDate;
	private String modDate;
}
