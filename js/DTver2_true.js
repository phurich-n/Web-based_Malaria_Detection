if (hist[103] <= 0) {
    if (hist[107] <= 0) {
        if (hist[116] <= 0) {
            if (hist[117] <= 0) {
                if (hist[105] <= 0) {
                    if (hist[95] <= 0) {
                        classes = 'Uninfected';
                    } else {
                        classes = 'Uninfected';
                    }
                } else {
                    if (hist[64] <= 0.011) {
                        classes = 'Parasitized';
                    } else {
                        classes = 'Uninfected';
                    }
                }
            } else {
                if (hist[43] <= 0) {
                    if (hist[128] <= 0) {
                        classes = 'Uninfected';
                    } else {
                        classes = 'Parasitized';
                    }
                } else {
                    classes = 'Parasitized';
                }
            }
        } else {
            if (hist[123] <= 0.001) {
                if (hist[201] <= 0.001) {
                    if (hist[44] <= 0.231) {
                        classes = 'Parasitized';
                    } else {
                        classes = 'Uninfected';
                    }
                } else {
                    classes = 'Uninfected';
                }
            } else {
                if (hist[90] <= 0) {
                    classes = 'Parasitized';
                } else {
                    classes = 'Uninfected';
                }
            }
        }
    } else {
        if (hist[89] <= 0.048) {
            if (hist[196] <= 0.001) {
                if (hist[0] <= 0.616) {
                    if (hist[3] <= 0.001) {
                        classes = 'Uninfected';
                    } else {
                        classes = 'Parasitized';
                    }
                } else {
                    if (hist[107] <= 0.001) {
                        classes = 'Parasitized';
                    } else {
                        classes = 'Uninfected';
                    }
                }
            } else {
                classes = 'Uninfected';
            }
        } else {
            classes = 'Uninfected';
        }
    }
} else {
    if (hist[81] <= 0.026) {
        if (hist[189] <= 0.002) {
            if (hist[73] <= 0.506) {
                if (hist[78] <= 0.214) {
                    if (hist[113] <= 0) {
                        classes = 'Parasitized';
                    } else {
                        classes = 'Parasitized';
                    }
                } else {
                    classes = 'Uninfected';
                }
            } else {
                classes = 'Uninfected';
            }
        } else {
            classes = 'Uninfected';
        }
    } else {
        if (hist[109] <= 0) {
            if (hist[121] <= 0) {
                if (hist[0] <= 0.795) {
                    if (hist[78] <= 0.039) {
                        classes = 'Parasitized';
                    } else {
                        classes = 'Uninfected';
                    }
                } else {
                    if (hist[78] <= 0.114) {
                        classes = 'Uninfected';
                    } else {
                        classes = 'Parasitized';
                    }
                }
            } else {
                classes = 'Parasitized';
            }
        } else {
            if (hist[195] <= 0.001) {
                if (hist[99] <= 0.002) {
                    if (hist[82] <= 0.473) {
                        classes = 'Parasitized';
                    } else {
                        classes = 'Uninfected';
                    }
                } else {
                    classes = 'Uninfected';
                }
            } else {
                classes = 'Uninfected';
            }
        }
    }
}