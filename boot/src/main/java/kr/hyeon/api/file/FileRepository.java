package kr.hyeon.api.file;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FileRepository extends JpaRepository<FileVo,Long> {
}
