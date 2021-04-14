package kr.hyeon.api.board;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data @Component
public class BoardDto {
    private long boardId;
    private String writer;
    private String email;
    private String subject;
    private String content;
    private String rdate;
}
