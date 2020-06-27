import { TestBed } from '@angular/core/testing';

import { DownloadTxtFileService } from './download-txt-file.service';

describe('DownloadTxtFileService', () => {
  let service: DownloadTxtFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadTxtFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
