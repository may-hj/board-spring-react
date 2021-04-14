package kr.hyeon.api.board;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="boards")
public class Board {
    @Id
    @Column(name="board_id") private long boardId;
    @Column(name="writer")private String writer;
    @Column(name="email")private String email;
    @Column(name="subject")private String subject;
    @Column(name="content")private String content;
    @Column(name="rdate")private String rdate;
}
