const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjBDMTYwNTM4OTdDMTFFNkEyMDVCMDNGNDY3QzZBRTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjBDMTYwNTQ4OTdDMTFFNkEyMDVCMDNGNDY3QzZBRTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMEMxNjA1MTg5N0MxMUU2QTIwNUIwM0Y0NjdDNkFFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMEMxNjA1Mjg5N0MxMUU2QTIwNUIwM0Y0NjdDNkFFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmiYAw8AAANqSURBVHja7JvLaxNRFMZPsnAhTVtFQfFR0fqIgojdGLT7oAs3touqWMVSN5ru+icomCItbgISLWIWduVC7V7ElS4KGisqpCIKCW21XcVF/I49g2OS6SSTTDIzxw9+tJR0cs93H3PvufeGSqUSuawdIAai4BA4ALaBLhCRz6yAH+A7+ADegyx4Bb66WbiQSwb0gSFwWoJuRGzGM5ABr71sANfmKLgMDrtUYe/AfZCSVuMJA7pBAtwAm6k1WgRTYBIsN/QkNsAhbN4wyJfap7yUIeQ0DqctoBc8ACfJG3oJLoFP9f5j2MGXDchg5JXgScryRsrmmgEhkASPQSd5T51StqSUtamD4AYZfYfIH8rI26jYDAM4+CcgTv7SLDhrZ0K4hmaf9mHwJGVO23UHOwNugvPkX3HZbzntAufADAVDg1axWBmwV14rXQExgBdax8HnWroA95npAAVPEst0tfGgmgE8ozpFwRPHNGzXBbplPb6Vgqm85COWrVpAIsDBk8SWsGoBHSDXwiVtu8RL6T1GPsHcAq4pCJ4kxtHyFsCj4zzYTzr0UcaCktECYoqCN/IZMXMXGCB9GjQbEFdoQNwYA3bi5xfSqd3cAk6QXsXYgGOKDTjKBkQVGxBlA3oUG9DDBmxXbMAWNiCi2IAOfg2WFBtQDJNyhalJ28w+1Yp2A1bZgG+KDSiwATnFBuTYgKxiA7JswJxiA+Z4HrALvyxongpzLmBeYfC8/7FgTIRmFRrw3JgIsWYUGvAnZnNanJtEr5LgK9Li7EJKUe2nJOZ/tsYiMinaFPDgl2gtCVSxNcZ/mFRQ+1Pm9Y/G7XE+vb5oXg6bxfvm4wGu/XFz8NVagPFGeEHeOgrbDPF54n5j8FvPANY+WjsPHKRDUnyJo+IwtVVKjD84EqDaHyGLk+Rhm5nS7QAEn1xvpmt3VpjHg4fk39Oij8DF8n5fjwEs1YelSR7AD8r4KPhMLcHXaoBhwgUw4YPgJ6SsxVo+7OTOEB+nuUfeuzXyE1ytd2n//9JUA+tpnlVdAYU2Bl6QMvQ7Cb6RFlC+gBoD16m1FyfvgjvU4MVJN67Oco24deqE9zDS5LGrs9XUJxOQM9R4mo2721OZkHn68rSVjOvzR8BB+nt9njNPG8EvsCqZmiXJR3Ca/i214Pr8bwEGAFI4z20o7nDcAAAAAElFTkSuQmCC";export{A as p};
