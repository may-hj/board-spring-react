package kr.hyeon.api.file;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "files")
public class FileVo {
    @Id
    @Column(name="")
    private long fileId;
    private String saveFname;
    private String originFname;
    private long fsize;
}
